import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Bills from '@/views/Bills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bills',
      name: 'Bills',
      component: Bills
    }
  ]
})
