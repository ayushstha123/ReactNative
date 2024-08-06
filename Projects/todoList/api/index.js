const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const crypto=require('crypto');
const bodyParser = require("body-parser");
const userAuth = require('./router/user_router.js')

const app=express()
const port = 5000;
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://test:test@cluster0.yeol1vi.mongodb.net/').then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("error connecting to mongodb",err);
})

app.listen(port,()=>{
    console.log("Server is running on port :",port);

})

app.use('/api',userAuth)