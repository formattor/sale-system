<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!--商品列表区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="value"></mt-switch>
            <img src="https://img2.woyaogexing.com/2018/03/08/53b79110033d698e!400x400_big.jpg" alt="">
            <div class="info">
              <h1>小米手机降价了</h1>
              <p>
                <span class="price">￥2199</span>
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
          <div class="mui-card-content-inner">
            这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from './../subcomponents/goodsinfo_numbox'
export default {
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
  }
</style>
