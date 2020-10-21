'use strict'

const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const registerRouter = require('./routes/signup')
const loginRouter = require('./routes/signin')

const viewsPath = path.join(__dirname, '/templates/views')
const partialsDirectory = path.join(__dirname, '/templates/partials')

require('hbs').registerPartials(partialsDirectory)

app.set('view engine', 'hbs')  // setting up the view engine
app.set('views', viewsPath)



app.use(express.static('assets'))  //setting up static assets

app.use('/signup', registerRouter)
app.use('/signin', loginRouter)

app.get(['/', '/home'], (req, res) => {
    res.render('home')
})


mongoose.connect('mongodb://localhost:27017/Accounts', {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => { console.log("connected to the database") })

app.listen(5000, () => {
    console.log("server is running on port 5000")
})