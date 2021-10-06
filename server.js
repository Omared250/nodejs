const express = require('express');
const users = require('./usersInformation.json')
const app = express();
        
// const getFunction = (req, res) => {
//     res.send('Hello, This is my first API')
// };

const usersInf = (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const filteredUsers = users.filter((u) => u.id >= page);
    res.send(filteredUsers.slice(0, limit));
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.userId)
    res.send(users.find(u => u.id === userId)) 
}

app.get('/users', usersInf)
app.get('/users/:userId', getUserById)

app.listen(3000, () => console.log("Server is up and running"))