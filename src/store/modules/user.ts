import { ActionContext } from 'vuex'
 
const User:any =  {
    state:{
      userInfo:{
          name:"小二"
      }
    },
    mutations:{
        login(state:any, data:any) {
            state.userInfo = data
        }
    },
    actions:{
        async getUserInfo(context:any ) {
            const res = await {name:"小王"}
            context.commit('login', res)
        }
        
      
    }
}

export default User