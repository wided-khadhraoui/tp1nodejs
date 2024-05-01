const express = require('express');
const router = express.Router();

//auth/login return message with html
router.get('/login',(req,res) =>{
    res.send("<h1>you are logged in ! </h1>")
});
//auth/register return page html 
router.get('/register',(req,res) =>{
    res.sendFile(__dirname+"/index.html")
});
module.exports=router;