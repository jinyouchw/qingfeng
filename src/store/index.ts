import { createStore } from 'vuex'

import User from './modules/user'

export default createStore({
  state: {
    spinning: false, // 全局load状态
  },
  getters:{

  },
  mutations: {
    setLoading(state, data) {
      state.spinning = data
    }
  },
  actions: {
  },
  modules: {
    User
  }
})
