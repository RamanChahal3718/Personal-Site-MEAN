const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res,) => {
  res.render('index', { title: 'Personal Site' });
});

/* GET / mom */
router.get('/mom', (req, res) => {
  res.render('mom');
});

/* GET / girlfriend */
router.get('/girlfriend', (req, res) => {
  res.render('girlfriend');
});

/* GET / dad */
router.get('/dad', (req, res) => {
  res.render('dad');
});

module.exports = router;
