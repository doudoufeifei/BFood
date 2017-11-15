// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//------------------新增----
//使用vuex
// import store from './store/store.js';
//--------------新加入 改的index.js-----
import store from './store/index.js';
//--------------新加入 改的index.js-----

//------------------新增----

//mock模拟的假数据
// import './mock/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//------------------新增----
  store,
//------------------新增----

  template: '<App/>',
  components: { App }
})
