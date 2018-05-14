// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import "../src/css/common.css"
import Axios from 'axios'
// import md5 from "js-md5"
// import base64 from "js-base64"
//加密
import crypto from "crypto"
import Element from "element-ui"
import "../node_modules/element-ui/lib/theme-chalk/index.css"
Vue.use(Element)

import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
//解决跨域
Axios.defaults.withCredentials=true

Vue.config.productionTip = false
var vm=new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
})
