import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'

// CSS Reset library
import '../node_modules/normalizecss/normalize.css'
// Animate.css import
import '../node_modules/animate.css/animate.min.css'

/* Register all filters globally */
for (let name in filters) {
  Vue.filter(name, filters[name])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
