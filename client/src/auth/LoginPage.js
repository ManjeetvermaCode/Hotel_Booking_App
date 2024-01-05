import {toast} from 'react-toastify'
import {useState} from 'react'
import { login } from '../actions/auth'
import LoginForm from '../components/loginForm'

import {useDispatch} from 'react-redux'

const Login=({history})=>{
    const [email,setemail]=useState('mj@gmail.com')
    const [password,setpassword]=useState('12345678')

    const dispatch=useDispatch()

async function submitHandler(e){
    e.preventDefault()
    try {
        const res=await login({email,password})
        console.log('res -',res)
        if(res.data){
            console.log('save user res in redux and local storage')

            //save user in localstorage
            window.localStorage.setItem('userInfo',JSON.stringify(res.data))
            //save user in redux store
            dispatch({
                type:'LOGGED_IN_USER',
                payload:res.data
            })
            history.push('/')
        }
        
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