import 'babel-polyfill'
import Vue from 'vue'

import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts'
import MyPlugin from './my_plugin'
import router from './router'
import VueCookies from 'vue-cookies'
import dataV from '@jiaminghi/data-view'

import store from './store'

Vue.prototype.$echarts = echarts


Vue.use(ElementUI);
Vue.use(MyPlugin);
Vue.use(VueCookies);
Vue.use(dataV)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
