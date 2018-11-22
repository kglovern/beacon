import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    JWT: '',
    userId: -1
  },
  getters: {
    JWT: (state) => localStorage.getItem('token') || '',
    jwtData: (state, getters) => state.JWT ? JSON.parse(atob(getters.JWT.split('.')[1])) : null,
    jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
    jwtIssuer: (state, getters) => getters.jwtData ? getters.jwtData.iss : null,
    userId: state => state.userId
  },
  mutations: {
    setJWT (state, jwt) {
      state.JWT = jwt
      localStorage.setItem('token', jwt)
    },
    setUserId (state, id) {
      state.userId = id
    }
  },
  actions: {
    loginInit ({ commit }, id, jwt) {
      commit('setJWT', jwt)
      commit('setUserId', id)
    }
  }
})
