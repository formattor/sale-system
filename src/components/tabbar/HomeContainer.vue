<template>
  <div>
    <!-- <h3>Home</h3> -->
    <mt-swipe :auto="4000">
      <!-- 后台服务器已经关掉 -->
      <!-- <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item> -->
     <mt-swipe-item>1</mt-swipe-item>
     <mt-swipe-item>2</mt-swipe-item>
     <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 导入轮播图组件 -->
    <!-- <swiper :isfull="true"></swiper> -->
    <!-- eslint-disable -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
		    <img src="../../images/menu1.png" alt="" />
		    <div class="mui-media-body">新闻资讯</div></router-link></li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
		    <img src="../../images/menu2.png" alt="" />
		    <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
		    <img src="../../images/menu3.png" alt="" />
		    <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		    <img src="../../images/menu4.png" alt="" />
		    <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		    <img src="../../images/menu5.png" alt="" />
		    <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		    <img src="../../images/menu6.png" alt="" />
		    <div class="mui-media-body">联系我们</div></a></li>
		</ul>
  </div>
</template>

<script>
// import {Toast} from 'mint-ui'
import swiper from './../subcomponents/swiper'
export default {
  data () {
    return {}
    // eslint-disable-next-line
    // lunbotuList:[]
  },
  created () {
    // this.getLunbotu()
  },
  methods: {
    // getLunbotu () {
    //   this.$http.get('http://vue.studyit.io/api/getlunbo')
    //     .then(result => {
    //       // console.log(result.body)
    //       if (result.body.status === 0) {
    //         this.lunbotuList = result.body.message
    //       } else {
    //         Toast('加载轮播图失败')
    //       }
    //     })
    // }
  },
  components: {
    swiper
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
    .mui-media-body{
      font-size: 13px;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  margin: none;
  img{
    width: 70px;
    height: 70px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>
