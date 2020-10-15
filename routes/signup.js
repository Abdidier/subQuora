'use strict'

const express = require('express')
const router = express.Router()
const Form = require('../schema/signup_schema')

router.use(express.urlencoded({extended: false}))


router.post('/', async (req, res) => {
    const form = new Form({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    const data = await form.save()
    res.redirect('/home')
    console.log(data)
})

module.exports = router
