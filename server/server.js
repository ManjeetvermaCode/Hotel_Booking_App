const express=require('express')
const {readdirSync}=require('fs')

const app=express()

//route middleware
readdirSync('./routes')
    .map((file) => app.use('/api', require(`./routes/${file}`)));

app.listen('3000',()=>{
    console.log('hosted on port 3000')
})