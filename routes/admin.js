const express = require('express')
const router = express.Router()

const users = [] 

router.get('/add-user', (req, res, next) => {
    res.render('add-user'), {
        pageTitle: 'Add User',
        path: '/add-user'
    }
})

router.post('/add-user', (req, res, next) => {
    users.push({title: req.body})
    res.redirect("/");
})

exports.routes = router;
exports.users = users;

// <% if(users.length > 0 ) { %>
//     <ul>
//         <% for (let user of users) { %>
//             <li> <%= user.name %> </li>
//         <% } %>
//     <% } else { %>
//     </ul>
//     <% } %>