import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import { getCookie,signOut } from '../utils/authService'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  if(getCookie("token")) {
    request.headers.Authorizatin = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
  }
  next((response) => {
    if(response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
  })
})

export const TestResource = Vue.resource(API_ROOT + 'test/data')
