import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    menuLists: JSON.parse(localStorage.getItem('menuLists'))
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    },
    setUser(state, data) {
      state.user = data
    },
    setMenuLists(state, data) {
      state.menuLists = data
    }
  },
  actions: {}
})
export default store
