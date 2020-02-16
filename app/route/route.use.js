const express = require('express')
const app = express.Router();
const user_controller = require('./../controller/controller.user')
app.post('/create',user_controller.create)
app.get('/find',user_controller.findAll)
app.post('webhook')
module.exports  = app