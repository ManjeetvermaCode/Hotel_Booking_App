const express=require('express')
const dotenv=require('dotenv').config()
const {readdirSync}=require('fs')
const morgan=require('morgan')
const mongoose=require('mongoose')
const cors=require('cors')
const exp = require('constants')

const port=process.env.PORT
const app=express()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())//this parse json data into req.body
// app.use(express.urlencoded({extended:true}))//used for handling url encoded data that usually comes from form data.

//route middleware
readdirSync('./routes')
    .map((file) => app.use('/api', require(`./routes/${file}`)));

//DB connection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('DataBase is connected successfully')).catch((err)=>console.log('something went wrong',err))

app.listen(port,()=>{
    console.log(`Hosted on port ${port}`)
})