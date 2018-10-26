// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './route/index'//在这里的目录还有一个简写的方法 就是仅写'./router' 会自动找这个目录下的index.js


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//当key和value的值是一样的 我们就可以简写
  components: { App },
  template: '<App/>'
})
