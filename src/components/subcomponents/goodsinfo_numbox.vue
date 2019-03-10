<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
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
      // console.log(this.$refs.numbox.values)
      this.$emit('getcount', parseInt(this.$refs.numbox.values))
    }
  },
  props: ['max'],
  watch: {
    'max': function (newVal, oldVal) {
      // mui(Selector).numbox().setOption('step',5)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
