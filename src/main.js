// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.js'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'
Vue.use(VuePreview)
// Vue.prototype.mui = mui
Vue.use(Mint)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.config.productionTip = false
// eslint-disable-next-line
var car = JSON.parse(localStorage.getItem('car') | '[]')

var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    /* eslint-disable */ 
    addToCar (state, goodsinfo) {
      var flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag=true
          return true
        }
      })
      if(!flag){
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {
    // getAllCount(state){
    //   var c=0
    //   state.car.forEach(item=>{
    //     c+=item.count
    //   })
    //   return c
    // }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App),
  components: { App },
  template: '<App/>'
})
