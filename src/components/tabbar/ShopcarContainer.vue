<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!--商品列表区域 -->
      <div class="mui-card" v-for="item in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="value"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算区域  -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">0</span> 件，总价 <span class="red">￥0</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>{{$store.getters.getGoodsSelected}}</p> -->
  </div>
</template>

<script>
/* eslint-disable */
import numbox from './../subcomponents/goodsinfo_numbox'
export default {
  data () {
    return {
      goodsList:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      var idArr = []
      this.$store.state.car.forEach(item=>idArr.push(item.id))
      if(idArr.length<=0){
        return;
      }
      this.$http.get(''+idArr.join(",")).then(result=>{
        if(result.body.status===0){
          this.goodsList=result.body.message
        }
      })
    }
  },
  components: {
    numbox
  }
}
</script>

<style lang="scss" scoped>
  .shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner{
    display: flex;
    align-items: center;
  }
    .goods-list{
      img{
        width: 60px;
        height: 60px;
      }
      h1{
        font-size: 13px;
      }
      .info{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        .price{
          color: red;
          font-weight: bold;
        }
      }
    }
    .jiesuan{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .red{
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
</style>
