import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/_index',
                name: 'index',
                component: Layout,
            },
            {
                
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
