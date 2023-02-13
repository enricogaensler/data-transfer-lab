import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'



Vue.use(Router);


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: () => import(/* webpackChunkName: "dogs" */ './views/Dogs.vue')
    },
    {
      path: '/investors',
      name: 'investors',
      component: () => import(/* webpackChunkName: "investors" */ './views/Investors.vue')
    },

    {
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "faq" */ './views/Faq.vue')
    },

    {
      path: '/apply',
      name: 'apply',
      component: () => import(/* webpackChunkName: "apply" */ './views/Apply.vue')
    },

    {
      path: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "auth" */ './views/Auth.vue')
      
    },
    
  ]
});
  
export default router