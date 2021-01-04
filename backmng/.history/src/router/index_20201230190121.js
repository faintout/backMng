import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import _index from '../views/_index.vue'
import addList from '../views/addList.vue'
import list from '../views/list.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/_index',
                name: '首页',
                component: _index,
            },
            {
                path: '/addList',
                name: '添加',
                component: addList,
            },
            {
                path: '/list',
                name: '列表查看',
                component: list,
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
