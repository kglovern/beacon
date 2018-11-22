import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Reset library
import '../node_modules/normalizecss/normalize.css'
// Animate.css import
import '../node_modules/animate.css/animate.min.css'

Vue.config.productionTip = false

/* Setup Axios as HTTP carrier */
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
