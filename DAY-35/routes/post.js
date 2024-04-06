const express=require('express');
const router=express.Router();

router.get("/:slug",(req,res)=>{
    res.send(`Hello ${req.params.slug}`);
})

module.exports=router;