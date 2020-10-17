'use strict'

const mongoClient = require('mongodb').MongoClient
const express = require('express')
const router = express.Router()

const url = 'mongodb://127.0.0.1:27017'

router.use(express.urlencoded({extended: false}))

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req,res) => {
    const email = req.body.email
    const password = req.body.password

    mongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        const msg = 'Incorrect password'
        const db = client.db('Accounts')
        db.collection('forms')
          .findOne({ email })
          .then(user => {
            password == user.password ? res.redirect('/home') : res.render('login', { msg })
        })
    })
})

module.exports = router