'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose') 
const home = require('./routes/home')
const signup = require('./routes/signup')

app.set('view engine', 'hbs')  // setting up the view engine

app.use(express.static('static'))
app.use('/signup', signup)
app.use('/home', home)

app.get('/', (req, res) => {
    res.render('index')
})


mongoose.connect('mongodb://localhost:27017/Accounts', {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => { console.log("connected to the database") })

app.listen(5000, () => {
    console.log("server is running on port 5000")
})