import { ActionContext } from 'vuex'
 
const User:any =  {
    state:{
      userInfo:{
          name:"",
          auth:""
      }
    },
    mutations:{
        login(state:any, data:any) {
            state.userInfo = data
        }
    },
    actions:{
        async getUserInfo(context:any,data:any ) {
            const res = await data
            context.commit('login', res)
        }
        
      
    }
}

export default User