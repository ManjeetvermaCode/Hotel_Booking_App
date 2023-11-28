const RegisterForm=({submithandler,name,setname,email,setemail,password,setpassword})=>{
    return(
        <form onSubmit={submithandler} className='mt-3'>
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
}

export default RegisterForm