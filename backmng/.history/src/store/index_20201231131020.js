import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        setToken(state, token) {
            //   state.token = token/
            local('backMng_token', token)
            //设置token
            state.token = token
        },
        getToken(state) {
            let token = local('backMng_token')
            state.token =token?token:''
      }
    },
    actions: {
    },
    modules: {
    }
})
