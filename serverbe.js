const cors = require('cors')
const express = require('express')
const app = expresss()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {

    try { 
        // response es la respuesta del axios, más yo retiro el data de dentro de la respuesta
    const { data } = await axios('https://jsonplaceholder.typicode.com/users') 
    
    return res.json(data)
    } catch (error) {
        console.error(error)
    }
   
})

app.listen('4567')