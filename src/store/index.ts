import { createStore } from 'vuex'

import User from './modules/user'

export default createStore({
  state: {
    spinning: false, // 全局load状态
    language:"cn"  // 全局语言
  },
  getters:{

  },
  mutations: {
    setLoading(state, data) {
      state.spinning = data
    },
    setLanguage(state, data) {
      state.language = data
    }
  },
  actions: {
  },
  modules: {
    User
  }
})
