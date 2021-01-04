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
                path: '/addList',
                name: 'addList',
                component: addList,
            },
            {
                path: '/list',
                name: 'list',
                component: list,
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
