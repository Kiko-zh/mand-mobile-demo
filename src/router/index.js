import Vue from 'vue'
import Router from 'vue-router'
import home from './module/home'

Vue.use(Router)

export default new Router({
  routes: [
    ...home
  ]
})
