const express = require('express')

const app = express()

app.get('/Danil', (req, res) => {
    return res.redirect('https://www.youtube.com/watch?v=3e1fUvqozAM')
})

app.listen(5000, () => {
    console.log('listening')
})