const express = require('express');
const router = express.Router();

router.get('/mulko', (req, res) => {
    res.send('Привіт я Артем');
});

module.exports = router;