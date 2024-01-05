import { Link,useHistory } from "react-router-dom";
import {useSelector,useDispatch } from "react-redux";

const NavBar=()=>{//here we cannot destructure history as it only work for route pages
  const dispatch=useDispatch()
  const history=useHistory()
  const {rootReducer}=useSelector(state=>({...state}))
      

  const logout=()=>{
    dispatch({
      type:'LOGOUT',
      payload:null
  })
  window.localStorage.removeItem('userInfo')
  history.push('/login')

}
    
     return <>
      <div className="d-flex justify-content-between bg-light nav">       
      <Link className='nav-link' to='/'>
        Home
        {/* Home - {JSON.stringify(rootReducer.auth)} */}
        {/* This converts js object to string for displaying */}
      </Link>
      {rootReducer.auth!==null && (
        <a className="nav-link pointer" onClick={logout}>
          Logout
        </a>
      )}
      {rootReducer.auth===null && <>
        <Link className='nav-link' to='login'>Login</Link>
      <Link className='nav-link' to='/register'>Register</Link>
      </>}
      
    </div>
      </>
      
    
      
      
     
    }
      
    
  
    
      
    
  

  
export default NavBar