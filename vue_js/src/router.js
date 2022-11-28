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
      path: '/unicorns',
      name: 'unicorns',
      component: () => import(/* webpackChunkName: "unicorns" */ './views/Unicorns.vue')
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
    {
      path: '/ride',
      name: 'ride',
      meta: { requiresAuth: true},
      component: () => import(/* webpackChunkName: "ride" */ './views/Ride.vue')
    },
    
  ]
});
  
export default router