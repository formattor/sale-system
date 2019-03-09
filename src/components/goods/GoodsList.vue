<template>
  <div class="goods-list">
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
  </div>
</template>

<script>
export default {

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
