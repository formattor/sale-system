<template>
  <div class="goods-list">
    <router-link class="goods-item" to="/home/goodsinfo" tag="div">
      <img src="https://pic.cnblogs.com/avatar/1622135/20190306171159.png" alt="">
      <h1 class="title">小米（MI）小米9 小米9SE</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余60件</span>
        </p>
      </div>
    </router-link>
    <div class="goods-item" @click="goDetail(item.id)">
      <img src="https://pic.cnblogs.com/avatar/1622135/20190306171159.png" alt="">
      <h1 class="title">小米（MI）小米9 小米9SE</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://pic.cnblogs.com/avatar/1622135/20190306171159.png" alt="">
      <h1 class="title">小米（MI）小米9 小米9SE</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余60件</span>
        </p>
      </div>
    </div>
    <!-- 渲染 -->
    <router-link class="goods-item" v-for="item in goodslist" :key="item.id" to="'/home/goodsinfo'+item.id" tag="div">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageIndex: 1,
      goodslist: []
    }
  },
  created () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      this.$http.get('' + this.pageIndex).then(result => {
        if (result.body.status === 0) {
          // this.goodslist = result.body.message
          this.goodslist = this.goodslist.concat(result.body.message)
        } else {

        }
      })
    },
    getMore () {
      this.pageIndex++
      this.getGoodsList()
    },
    goDetail (id) {
      // 使用js的形式进行路由导航
      this.$router.push('/home/goodsinfo' + id)
    }
  }
}
</script>

<style lang="scss">
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item{
    border: 1px solid #ccc;
    width: 49%;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    min-height: 293px;
    // 解决相对和绝对定位
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img{
    width: 100%;
  }
  .title{
    font-size: 14px;
  }
  .info{
    background-color: #eee;
    p{
      margin: 0;
    }
    .price{
      .now{
        color: red;
        font-weight:bold;
        font-size: 16px;
      }
      .old{
        text-decoration: line-through;
        // float: right;
        font-size: 12px;
        color: #ccc;
        margin-left: 10px;
      }
    }
    .sell{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
  }
}
</style>
