import {useState} from 'react'

const Register=()=>{
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')

   function submitHandler(e){
    e.preventDefault()
    console.table({name,email,password})
   }

    const registerForm=()=>(
           <form onSubmit={submitHandler} className='mt-3'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Enter Name</label>
                    <input className='form-control' type='text' value={name} onChange={(e)=>setname(e.target.value)}></input>
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label'>Enter Email</label>
                    <input className='form-control' type='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label'>Enter Password</label>
                    <input className='form-control' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                </div>

                <button className='btn btn-primary'>Submit</button>
           </form>
    )

    return(
        <>
        <div className='container-fluid bg-secondary p-5 text-center p-3'>
            RegisterPage
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>{/* div will take 6 unite of space and 3,3 unite will be left space left and right */}
                    {registerForm()}

                </div>
            </div>

        </div>
        </>
    )
}

export default Register