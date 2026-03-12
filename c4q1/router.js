const express = require('express');
const router = express.Router(); 


router.get('/', (req, res) => {
  res.status(200).send('Hello, World! In GET');
});

router.post('/', (req, res) => {
  res.status(201).send('Hello, World! In POST');
});

module.exports = router; 