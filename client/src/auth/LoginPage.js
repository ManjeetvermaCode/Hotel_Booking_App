import {toast} from 'react-toastify'
import {useState} from 'react'
import { login } from '../actions/auth'
import LoginForm from '../components/loginForm'

const Login=()=>{
    const [email,setemail]=useState('mj@gmail.com')
    const [password,setpassword]=useState('12345678')

async function submitHandler(e){
    e.preventDefault()
    console.log('User Info', {email,password})
    try {
        const res=await login({email,password})
        console.log('res -',res)
        // if(res.data){
        //     console.log('save user res in redux and local storage')
        //     console.log('res.data')
        // }
        
    } catch (error) {
        console.log(error)
        if(error.response.status===400)toast.error(error.response.data)
    }
}

    return(
        <>
        <div className='container-fluid bg-secondary text-center p-5'>
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