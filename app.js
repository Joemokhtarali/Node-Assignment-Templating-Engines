const adminData = require('./routes/admin')
const userspRoutes = require('./routes/users')
const express = require('express')

const app = express()

const users = [] 

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine' , 'ejs') 
app.set('views' , 'views')

app.use(adminData.routes)
app.use(userspRoutes)




app.use((req, res, next) => {
    res.status(404).render('404')
})


app.listen(3000)
