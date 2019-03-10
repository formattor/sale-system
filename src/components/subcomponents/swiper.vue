<template>
  <div>
    <mt-swipe :auto="4000">
     <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
       <img :src="item.img" alt="" :class="{full:isfull}">
     </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['lunbotuList', 'isfull']
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
.full{
  width:100%;
}
</style>
