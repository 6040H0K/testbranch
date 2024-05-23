const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Go To Dima Page!')
})

app.get('/dima', (req, res) => {
    res.send('Hello, I am Dima!')
})

app.listen(5000, () => {
    console.log('Dima app listening on port 3000!')
})