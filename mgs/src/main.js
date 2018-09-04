// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ajaxObject,errorHandling,pageScroll } from '../config/ajax.js'
import md5 from 'js-md5' // md5加密组件
import defined from './defined.js'
import { PIC } from '../config/pic.js'

Vue.prototype.ajax = ajaxObject;
Vue.prototype.errorHandling = errorHandling;
Vue.prototype.pageScroll = pageScroll;
Vue.prototype.AURL = 'http://api.niaoniao-blog.cn/';
Vue.prototype.defined = defined;
Vue.prototype.PIC = PIC;


Vue.prototype.md5 = md5;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
