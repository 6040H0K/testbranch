const express = require('express')

const app = express()
const port = 5000

app.post('/sergey', (res) => {
    res.send(200)
    console.log('Привіт, я Сергій')
})

app.listen(port, () => {
    console.log('listening on port')
})