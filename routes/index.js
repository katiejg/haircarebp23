var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hair Care' });
});

router.get('/a', function(req, res, next) {
  res.render('attribute', { title: 'About' });
});

module.exports = router;
