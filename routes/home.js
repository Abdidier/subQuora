'use strict'

const express = require('express')
const router = express.Router()

router.use(express.static('static'))


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/register', (req, res) => {
    res.render('register')
})


module.exports = router