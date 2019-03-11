<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1'>
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
			<input id="test" class="mui-input-numbox" type="number" value="5"
      @change="countChanged" ref="numbox"/>
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
  </div>
</template>

<script>
// import mui from "../../lib/mui/js/mui.min.js"
export default {
  mounted: {
    // mui('mui-numbox').numbox()
  },
  methods: {
    countChanged () {

    }
  }
}
</script>

<style lang="scss" scoped>
.mui-numbox{
  height: 25px;
}
</style>
