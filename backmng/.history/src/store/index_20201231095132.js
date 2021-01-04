import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const local = (key, value) => {
    return value ? localStorage.setItem(key, value) : localStorage.getItem(key)
}
export default new Vuex.Store({
  state: {
      token:''
  },
  mutations: {
      setToken(state,token){
        //   state.token = token/

      }
  },
  actions: {
  },
  modules: {
  }
})
