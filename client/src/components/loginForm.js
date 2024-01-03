const LoginForm=({submitHandler,email,setemail,password,setpassword})=>{
    return(
        <form onSubmit={submitHandler} className='mt-3'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Enter Email</label>
                    <input className='form-control' type='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
                </div>

                <div className='form-group mb-3'>
                    <label className='form-label'>Enter Password</label>
                    <input className='form-control' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                </div>

                <button disabled={!email || !password} className='btn btn-primary'>Submit</button>
           </form>
    )
}

export default LoginForm