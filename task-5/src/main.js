import Vue from 'vue'
import App from './App.vue'
import store from "./store"

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import router from "./router"

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
