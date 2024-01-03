const User = require('../models/userModel');

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
  const {email,password}=req.body
  const user=await User.findOne({email}).exec()
  // if(user){
  //   user.comparePassword(password,(err,match)=>{
  //     if(!match || err){
  //       return res.status(400).send('Invalid Password')
  //     }
  //     console.log('create and store token')
  //   })
  // }else{
  //   res.status(400).send('email does not exist')
  // }
  if(!user){
    return res.status(400).send('Invalid Email Id or Password')
  }
  user.comparePassword(password,(err,match)=>{

    if(err||!match){
      return res.status(400).send('Invalid Password')
    }
    return res.status(400).send('Logged In successfully')

    // console.log(err,match)
  })
}

module.exports = { register, login };
