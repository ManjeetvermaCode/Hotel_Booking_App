const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const {Schema}=mongoose

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        min:8,
        max:64
    },
    // stripe_account_id:'',
    // stripe_seller:{},
    // stripeSession:{}
},{
    timestamps:true
})

UserSchema.pre("save",function(next){
    let user=this// 'this' is refering to current instance of model/document, i.e user model
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

UserSchema.methods.comparePassword=function(password,next){
    bcrypt.compare(password,this.password,function(err,match){
        if(err){
            console.log('Incorrect Username or Password',err)
            return next(err)
        }
        console.log('Successfully logged In')
        return next(null,match)
    })
}

const User=mongoose.model("User",UserSchema)

module.exports=User