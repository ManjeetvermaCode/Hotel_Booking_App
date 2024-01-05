let userState;

if(window.localStorage.getItem('userInfo')){
  userState=JSON.parse(window.localStorage.getItem('userInfo'))
}else{
  userState=null;//null means empty object.
}

export const authReducer=(state=userState,action)=>{
    switch(action.type){
      case "LOGGED_IN_USER":
        return {...state,...action.payload}
      case "LOGOUT":
          return action.payload
      default:
          return state;
    }
  }