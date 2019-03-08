<template>
  <!-- <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间</span>
      <span>点击：0次</span>
    </p>

    <hr>
    <div class="content">

    </div>
  </div> -->
    <div class="newsinfo-container">
    <!-- 标题区域 -->
    <!-- <h3>新闻详情---{{$route.params.id}}</h3> -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 副标题区域 -->
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content">
    <!-- 评论区域 -->
    <comment-box></comment-box>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comments'
export default {
  data () {
    return {
      // id=this.$route.params.id
      newsinfo: {}
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      this.$http.get('').then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0]
        } else {
          Toast('获取新闻失败')
        }
      })
    }
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style lang="scss">
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 16px;
    color: red;
    text-align: center;
    margin: 15px;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content:space-between;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
