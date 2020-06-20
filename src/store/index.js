import Vue from 'vue'
import Vuex from 'vuex'
import Deck from './modules/deck'
import Users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Deck,
    Users
  }
})
