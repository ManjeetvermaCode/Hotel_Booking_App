const showMsg=(req,res)=>{
    res.status(201).send(`Here is your message ${req.params.message}`)
}

module.exports=showMsg