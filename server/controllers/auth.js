const User = require('../models/userModel');
const jwt=require('jsonwebtoken')

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.status(401).send('Username is required');
  if (!password || password.length < 8) return res.status(401).send('Password is required and should be at least 8 characters long.');

  try {
    // Check if a user with the same email already exists
    const userExist = await User.findOne({ email }).exec();

    if (userExist) {
      console.log('Email already exists');
      return res.status(409).send('Email already exists');
    }

    // If the user doesn't exist, create a new user
    const user = new User({ name, email, password });
    await user.save();

    console.log('User saved successfully');
    return res.status(200).json({ 'ok': true });
  } catch (error) {
    console.error('User Creation Failed', error);
    return res.status(400).send('User Creation Failed');
  }
};

const login=async(req,res)=>{
  try {
    const {email,password}=req.body
  const user=await User.findOne({email}).exec()
  
  if(!user){
    return res.status(400).send('Invalid Email Id or Password')
  }
  user.comparePassword(password,(err,match)=>{

    if(err||!match){
      return res.status(400).send('Invalid Password')
    }
    let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
      expiresIn:'7d'
    })
    res.send({token,user:{
      _id:user._id,
      name:user.name,
      email:user.email,
      createdAt:user.createdAt,
      updatedAt:user.updatedAt
    }})//sending token and user to frontend

  })
  } catch (error) {
    console.log('error occured', error)
    res.status(400).send('SignIn Failed')
  }
}

module.exports = { register, login };
