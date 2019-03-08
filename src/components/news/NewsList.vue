<template>
  <div>
    <!-- 新闻资讯列表 -->
    <!-- <ul class="mui-table-view" v-for="item in newsList" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time}}</span>
                <span>点击：{{item.click}}次</span>
              </p>
						</div>
					</a>
				</li>
    </ul> -->
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="https://pic.cnblogs.com/avatar/1622135/20190306171159.png">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2012-1-1 12：12：00</span>
                <span>点击：0次</span>
              </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://pic.cnblogs.com/avatar/1622135/20190306171159.png">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2012-1-1 12：12：00</span>
                <span>点击：0次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://pic.cnblogs.com/avatar/1622135/20190306171159.png">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2012-1-1 12：12：00</span>
                <span>点击：0次</span>
              </p>
						</div>
					</a>
				</li>
			</ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      this.$http.get('').then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message
        } else {
          Toast('获取新闻列表失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{font-size: 14px}
  }
  .mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
