import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
    children:[
        
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
