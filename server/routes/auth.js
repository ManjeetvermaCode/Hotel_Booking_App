const express=require('express')
const showMsg=require('../controllers/auth')
const router=express.Router()

router.get('/:message',showMsg)

module.exports=router