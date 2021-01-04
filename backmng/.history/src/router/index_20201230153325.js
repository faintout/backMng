import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import _index from '../views/_index.vue'
import addList from '../views/addList.vue'
import list from '../views/list.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/_index',
                name: '_index',
                component: _index,
            },
            {
                path: '/add',
                name: 'index',
                component: Layout,
            },
            {
                path: '/list',
                name: 'index',
                component: Layout,
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
