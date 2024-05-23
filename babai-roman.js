const express = require('express')

const app = express()

app.get('/roman', (req, res) => {
    res.send('Hello!!!!!!!!!!!, I am Roman!')
})

app.listen(5000, () => {
    console.log('LADA SIDAN!')
})