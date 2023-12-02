const mongoose=require('mongoose')
const {Schema}=mongoose


const userSchema=new Schema({
    name:{
        required:'Name is required',
        trim:true,//this removes all the extra empty white spaces
        type:String,
    },
    email:{
        required:'Email is required',
        trim:true,
        type:String,
        unique:true
    },
    password:{
        required:'Password is required',
        trim:true,
        min:8,
        max:64
    },
    strip_account_id:'',
    stripe_seller:{},
    stripeSession:{}
},
{
    timestamps:true//adds another field to the model which stores the date and time when the model instance is created or modified.
})

module.exports=mongoose.model("User",userSchema)