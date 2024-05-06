const express = require ('express')
const PORT = 1235
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
require("dotenv").config()
const router = require('./router')

app.use(express.json())
app.use(cors({origin:"*"}));
app.use(router)


mongoose.connect(process.env.url).then(()=>{
    console.log('connected to database successfuly')
}).catch((error)=>{
    console.log(error.message)
})




app.listen(PORT, (req,res)=>{
    console.log(`connected to port:${PORT}`)
})