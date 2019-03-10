<template>
  <div class="goodsdesc-container">
    <h3>商品介绍页面</h3>
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content" v-html="info.content">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {}
    }
  },
  created () {
    this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc () {
      this.$http.get('' + this.$router.params.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0]
        } else {

        }
      })
    }
  }
}
</script>

<style lang="scss">
.goodsdesc-container{
  padding: 4px;
  h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
