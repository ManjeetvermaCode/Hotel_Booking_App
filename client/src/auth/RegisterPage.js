import {useState} from 'react'

import RegisterForm from '../components/registerForm.js'

import {toast} from 'react-toastify'
import { register } from '../actions/auth.js'

const Register=({history})=>{
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')

  async function submitHandler(e){
    e.preventDefault()
    try{
        const res=register({name,password,email})
        console.log('data is sended successfully ==>' ,res)
        toast.success('Registration is done successfully, please login')
        history.push('/login')
    }catch(e){
        console.log('unabled to send data to the backend', e)
        toast.error(e.response.data)
    }
}
    return(
        <>
        <div className='container-fluid bg-secondary p-5 text-center p-3'>
            RegisterPage
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>{/* div will take 6 unite of space and 3,3 unite will be left space left and right */}
                    <RegisterForm submithandler={submitHandler} name={name} email={email} password={password} setname={setname} setemail={setemail} setpassword={setpassword}/>

                </div>
            </div>

        </div>
        </>
    )
}

export default Register