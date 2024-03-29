import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    JWT: '',
    userId: -1,
    projectId: -1,
    frames: [],
    assets: [],
    projectName: ''
  },
  getters: {
    JWT: state => localStorage.getItem('token') || '',
    jwtData: (state, getters) => state.JWT ? JSON.parse(atob(getters.JWT.split('.')[1])) : null,
    jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
    jwtIssuer: (state, getters) => getters.jwtData ? getters.jwtData.iss : null,
    userId: state => state.userId,
    project: state => state.projectId,
    frames: state => state.frames
  },
  mutations: {
    setJWT (state, jwt) {
      state.JWT = jwt
      localStorage.setItem('token', jwt)
    },
    setUserId (state, id) {
      state.userId = id
    },
    setProjects (state, projectArr) {
      state.projects = projectArr
    },
    addProject(state, projectObj) {
      state.projects.push(projectObj)
    },
    setCurrentProject (state, projectId) {
      state.projectId = projectId
    },
    setFrames(state, frameData) {
      state.frames = frameData
    },
    setAssets(state, assetData) {
      state.assets = assetData
    },
    setProjectName (state, name) {
      state.projectName = name
    }
  },
  actions: {
    loginInit ({ commit }, id, jwt) {
      commit('setJWT', jwt)
      commit('setUserId', id)
    },
    logout ({ commit }) {
      commit('setJWT', '')
      commit('setUserId', -1)
      commit('setProjects', [])
      commit('setCurrentProject', -1)
    },
    projectLoad({ commit }, data) {
      commit('setFrames', data.frames)
      commit('setAssets', data.assets)
      commit('setProjectName', data.name)
    }
  }
})
