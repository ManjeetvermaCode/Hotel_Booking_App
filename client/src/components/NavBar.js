import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar=()=>{
    return(
      <div className="d-flex justify-content-between bg-light nav">
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='login'>Login</Link>
        <Link className='nav-link' to='/register'>Register</Link>
      </div>
    )
  }

  
export default NavBar