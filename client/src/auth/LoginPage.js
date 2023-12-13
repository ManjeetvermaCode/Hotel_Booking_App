import {toast} from 'react-toastify'
import {useState} from 'react'
import { register } from '../actions/auth'
import LoginForm from '../components/loginForm'

const Login=()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

const submitHandler=(e)=>{
    e.preventDefault()
    //
}
    return(
        <>
        <div className='container-fluid bg-secondary text-center p-3'>
            Login
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                <LoginForm submitHandler={submitHandler} email={email} password={password} setemail={setemail} setpassword={setpassword}/>

                </div>
            </div>
        </div>
        </>
    )
}

export default Login