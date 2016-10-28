import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
import { sync } from 'vuex-router-sync'

//sync the route with the vuex store.
//this registers 'store.state.route'

Vue.use(Mint)

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App //Object spread copying everything form App.vue
})

app.$mount('#app')
