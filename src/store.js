import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    JWT: ''
  },
  getters: {
    jwt: state => state.JWT,
    jwtData: (state, getters) => state.JWT ? JSON.parse(atob(getters.JWT.split('.')[1])) : null,
    jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
    jwtIssuer: (state, getters) => getters.jwtData ? getters.jwtData.iss : null
  },
  mutations: {
    setJWT(state, jwt) {
      state.JWT = jwt;
    }
  },
  actions: {

  }
})
