const cors = require('cors')
const express = require('express')
const app = expresss()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([ 
        { name: 'user1'},
        { name: 'user2'},
        { name: 'user3'}    

    ])
})

app.listen('4567')
