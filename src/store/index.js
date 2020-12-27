import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: '',
    mobile:""
  },
  mutations: {
    setJwt(state,val) {
      
      localStorage.setItem('jwt', val);
      state.jwt = val;
    },
    setMob(state,val){
      state.mobile = val
    }
  },
  actions: {
  },
  modules: {
  }
})
