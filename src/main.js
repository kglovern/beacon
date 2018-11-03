import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Reset library
import '../node_modules/normalizecss/normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
