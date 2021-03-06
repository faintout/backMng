import Vue from 'vue'
import Vuex from 'vuex'
import local from '../toolUtil/local.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: local('backMng_token')?local('backMng_token'):''
    },
    mutations: {
        setToken(state, token) {
            //   state.token = token/
            local('backMng_token', token)
            // localStorage.removeItem('backMng_token')
            //设置token
            state.token = token
        },
        getToken(state) {
            let token = local('backMng_token')
            state.token =token?token:''
      },
        delToken(state) {
            state.token =''
            //清除本地token
            localStorage.removeItem('backMng_token')
      }
    },
    actions: {
    },
    modules: {
    }
})
