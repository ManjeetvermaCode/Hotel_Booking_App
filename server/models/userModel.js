const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
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

userSchema.pre("save",function(next){
    let user=this// 'this' is refering to current instance of model, i.e user model
    if(user.isModified("password")){
        return bcrypt.hash(user.password,12,function(err,hash){
            if(err){
                console.log('Had trouble hashing the password', err)
                return next(err)
            }
            user.password=hash
            return next()

        })
    }
    return next()
})

module.exports=mongoose.model("User",userSchema)