<template>
  <div>
		<h3>图片分享</h3>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class='["mui-control-item",item.id==0?"mui-active":""]'
						v-for="item in cates" :key="item.id" @click="getPhoteListByCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
		<!-- eslint-disable -->
		<!-- 图片区域 -->
		<ul class="photo-list">
			<router-link v-for="item in list" :key="item.id" 
      :to="'/home/photoinfo/'+item.id" tag="li">
				<img v-lazy="item.img_url">
        <div class="info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
			</router-link>
		</ul>

  </div>
</template>

<script>
// import mui from '../../lib/mui/js/mui.min.js'
// mui('.mui-scroll-wrapper').scroll({
//   deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// })
export default {
  data () {
    return {
      cates: [],
      list: []
    }
  },
  created () {
    this.getAllCategory()
    this.getPhoteListByCateId(0)
  },
  methods: {
    getAllCategory () {
      this.$http.get('').then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({title: '全部', id: 0})
          this.cates = result.body.message
        } else {

        }
      })
    },
    getPhoteListByCateId (cateId) {
      this.$http.get('' + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message
        } else {

        }
      })
    }
  }
}
</script>

<style lang="scss">
*{
  touch-action: pan-y;
}

.photo-list{
  list-style:none;
  margin: 0;
  padding: 10;
  padding-bottom: 0;
	li{
		background-color: #ccc;
    text-align: center;
    position: relative;
    img{
      width: 100%;
      vertical-align: middle;
      box-shadow: 0 0 9px #999;
    }
    margin-bottom: 10px;
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
    .info{
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      min-height: 84px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size: 13px;
      }
    }
	}
}
</style>
