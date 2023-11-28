const express=require('express')
const {showMsg,register}=require('../controllers/auth')
const router=express.Router()

router.get('/:message',showMsg)
router.post('/register',register)

module.exports=router