const {User}=require('../models/userModel')

const register=async(req,res)=>{
const {name,email,password}=req.body

if(!name)return res.status(401).send('Username is required')
if(!password||password.legth<8)return res.status(401).send('Password is required and Password should be atleast 8 characters long.')

const userExist=await User.findOne({email})
if(userExist){
    console.log('Email already exists')
}

// console.log(`users name is ${name}, email is ${email} and his password is ${password}`)
}

module.exports={register}