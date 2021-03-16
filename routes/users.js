const express = require('express')
const router = express.Router()
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    res.render('users', {
        users: adminData.users
    })
})

module.exports = router