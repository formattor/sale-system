import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import ShopcarContainer from '@/components/tabbar/ShopCarContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'homecontainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'membercontainer',
      component: MemberContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      name: 'shopcarcontainer',
      component: ShopcarContainer
    },
    {
      path: '/home/newslist',
      name: 'newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo',
      name: 'newsinfo',
      component: NewsInfo
    }
  ],
  linkActiveClass: 'mui-active'
})
