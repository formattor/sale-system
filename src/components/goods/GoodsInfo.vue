<template>
  <div class="goodsinfo-container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 商品图区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper> -->
            <mt-swipe :auto="4000">
              <mt-swipe-item>1</mt-swipe-item>
              <mt-swipe-item>2</mt-swipe-item>
              <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
					</div>
				</div>
			</div>
      <!-- 商品购买区域 -->
      <div class="mui-card">
				<div class="mui-card-header">商品名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价:<del>$2999</del>&nbsp;&nbsp;销售价:<span class="now_price">$2199</span>
            </p>
            <p>购买数量<numbox @getcount="getSelectCount" :max="goodsinfo.stock_quantity"></numbox></p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            </p>
					</div>
				</div>
			</div>
      <!-- 商品参数区域 -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:</p>
						<p>库存情况:</p>
						<p>上架时间:</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品详情</mt-button>
        </div>
			</div>
      <!-- 数据渲染区域 -->
      <!-- 商品购买区域 -->
      <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价:<del>${{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">${{goodsinfo.sell_price}}</span>
            </p>
            <p>购买数量<numbox></numbox></p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </p>
					</div>
				</div>
			</div>
      <!-- 商品参数区域 -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsinfo.goods_no}}</p>
						<p>库存情况:{{goodsinfo.stock_quantity}}件</p>
						<p>上架时间:{{goodsinfo.add_time|dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品详情</mt-button>
        </div>
			</div>
  </div>
</template>

<script>
import swiper from './../subcomponents/swiper'
import numbox from './../subcomponents/goodsinfo_numbox'
export default {
  data () {
    return {
      id: this.$route.params.id,
      lunbotuList: [],
      goodsinfo: {},
      ballFlag: false,
      selectCount: 1
    }
  },
  created () {
    this.getLunbotu()
    this.getGoodsInfo()
  },
  methods: {
    getLunbotu () {
      this.$http.get('' + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src
          })
          this.lunbotu = result.body.message
        } else {

        }
      })
    },
    getGoodsInfo () {
      this.$http.get('' + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0]
        } else {}
      })
    },
    goDesc (id) {
      // this.$router.push({name: 'GoodsDesc', params: {id}})
      this.$router.push('/home/goodsdesc/:id')
    },
    goComment (id) {
      // this.$router.push({name: 'GoodsComment', params: {id}})
      this.$router.push('/home/goodscomment/:id')
    },
    addToShopCar () {
      this.ballFlag = !this.ballFlag
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0,0)'
    },
    enter (el, done) {
      /*eslint-disable*/
      el.offsetWidth
      const ballPosition=this.$refs.ball.getBoundingClientRect()
      const badgePosition=document
      .getElementById('badge')
      .getBoundingClientRect()
      const xDist=badgePosition.left-ballPosition.left
      const yDist=badgePosition.top-ballPosition.top
      // el.style.transform = 'translate(93px,230px)'
      el.style.transform = `translate(${xDist}px,${yDist}px)`
      el.style.transition = 'all 0.5s cubic-bezier(.17,.67,.83,.67)'
      done()
    },
    afterEnter (el) {
      this.ballFlag = !this.ballFlag
    },
    getSelectCount(count){
      this.selectCount=count
    }
  },
  components: {
    swiper,
    numbox
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
  background-color: #ccc;
  overflow: hidden;
}
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    text-align: center;
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
.mui-card-footer{
  display: block;
  button{
    margin: 15px 0;
  }
}
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: red;
  position: absolute;
  z-index: 99;
  top:390px;
  left:140px;
}
</style>
