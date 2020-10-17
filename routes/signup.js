'use strict'

const express = require('express')
const router = express.Router()
const User = require('../schema/signup_schema')

router.use(express.urlencoded({extended: false}))

router.get('/', (req, res) => {
    res.render('register')
})

router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const data = await user.save()
    res.redirect('/home')
    console.log(data)
})

module.exports = router
