const express = require('express')

const app = express()

const users = [] 
const adminData = require('./routes/admin')

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine' , 'ejs') 
app.set('views' , 'views')

app.set(adminData.routes)



app.use('/', (req, res, next) => {
    res.render('users')
})

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(3000)
