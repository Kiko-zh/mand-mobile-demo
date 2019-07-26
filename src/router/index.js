import Vue from 'vue'
import Router from 'vue-router'
import home from './module/home'
import community from './module/community'
import financial from './module/financial'
import life from './module/life'
import mine from './module/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...home,
    ...community,
    ...financial,
    ...life,
    ...mine
  ]
})
