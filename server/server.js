const express=require('express')
const dotenv=require('dotenv').config()
const {readdirSync}=require('fs')
const morgan=require('morgan')
const mongoose=require('mongoose')
const cors=require('cors')

const port=process.env.PORT
const app=express()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//route middleware
readdirSync('./routes')
    .map((file) => app.use('/api', require(`./routes/${file}`)));

//DB connection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('DataBase is connected successfully')).catch((err)=>console.log('something went wrong',err))

app.listen(port,()=>{
    console.log(`Hosted on port ${port}`)
})