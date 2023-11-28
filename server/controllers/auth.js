const showMsg=(req,res)=>{
    res.status(201).send(`Here is your message ${req.params.message}`)
}

const register=(req,res)=>{
const {name,email,password}=req.body
console.log(`users name is ${name}, email is ${email} and his password is ${password}`)
}

module.exports={showMsg,register}