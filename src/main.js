import Vue from 'vue'
import App from './App.vue'
import routes from './utilities/Router/index'
import store from './utilities/Store/index'
Vue.config.productionTip = false

new Vue({
  router: routes,
  store,
  render: h => h(App),
}).$mount('#app')
