<template>
  <div>
    <h3>Home</h3>
    <mt-swipe :auto="4000">
      <!-- 后台服务器已经关掉 -->
      <!-- <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item> -->
     <mt-swipe-item>1</mt-swipe-item>
     <mt-swipe-item>2</mt-swipe-item>
     <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    // eslint-disable-next-line
    lunbotuList:[]
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      this.$http.get('http://vue.studyit.io/api/getlunbo')
        .then(result => {
          // console.log(result.body)
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message
          } else {
            Toast('加载轮播图失败')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color: red;
    }
    &:nth-child(2){
      background-color: cyan;
    }
    &:nth-child(3){
      background-color: blue;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
