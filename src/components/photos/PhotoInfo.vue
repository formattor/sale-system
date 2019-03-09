<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 3.引入评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
// 1.导入子组件
import comment from './../subcomponents/comments'
export default {
  data () {
    return {
      id: this.$route.id,
      photoinfo: [],
      slide1: []
    }
  },
  created () {
    this.getPhotoInfo()
    this.getThumbs()
  },
  methods: {
    getPhotoInfo () {
      this.$http.get('').then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0]
        } else {

        }
      })
    },
    getThumbs () {
      this.$http.get('' + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(slide1 => {
            slide1.w = 600
            slide1.h = 400
          })
          this.slide1 = result.body.message
        } else {

        }
      })
    }
  },
  components: { // 2.注册子组件
    'cmt-box': comment
  }
}
</script>

<style lang="scss">
.photoinfo-container{
  padding: 3px;
  h3{
    color:#26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs{
    img{
      margin: 10;
      box-shadow: 0 0 9px #999;
    }
  }
}
</style>
