import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
