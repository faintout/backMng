import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import _index from '../views/_index.vue'
import addList from '../views/addList.vue'
import list from '../views/list.vue'
import login from '../views/login.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
    // {
    //     path:'*',
    //     name:'redirect',
    //     redirect:'/login'
    // },
    {
        path:'/',
        name:'redirect',
        redirect:'/_index'
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path: '/layout',
        name: 'Layout',
        component: Layout,
        redirect:'/_index',
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
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
      next();
    } else {
        store.commit('getToken')
      let token = store.state.token
      console.log('token',token);
   
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  });

export default router
