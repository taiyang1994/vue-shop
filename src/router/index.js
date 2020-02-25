import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Menu from '../views/Home'
import role from '../components/rights/role'
import rights from '../components/rights/rights'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/menu'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    children: [
      {
        path: '/rights',
        name: 'rights',
        component: rights
      },
      {
        path: '/roles',
        name: 'role',
        alias: 'laj',
        component: role
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
