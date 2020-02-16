//import defendences
const express  = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
//contend


///setup morgan
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser:true
    },()=>console.log('connect database thanh cong')
)
const app = express()
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//setup route
const user_route = require('./app/route/route.use')
app.use('/user',user_route)
//errorr 404
app.use((req,res,next)=>{
    const err = new Error('not fount')
    const status = err.status || 404
      next(status)
})
//handle err function
app.use((req,res,next)=>{
    
})
//export module
module.exports = app