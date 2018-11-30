import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
// CSS Reset library
import '../node_modules/normalizecss/normalize.css'
// Animate.css import
import '../node_modules/animate.css/animate.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt, faExternalLinkSquareAlt, faFolderPlus, faPlus, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSignOutAlt)
library.add(faExternalLinkSquareAlt)
library.add(faFolderPlus)
library.add(faPlus)
library.add(faGlobeAmericas)
/* Register global icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
