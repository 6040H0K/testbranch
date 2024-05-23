const express = require('express');
const router = express.Router();

router.get('/dima', (req, res) => {
  res.send('Привіт я Діма');
});

module.exports = router;