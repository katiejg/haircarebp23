var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hair Care' });
});

router.get('/a', function(req, res, next) {
  res.render('attribute', { title: 'About' });
});

router.get('/qz', function(req, res, next) {
  res.render('quiz', { title: 'Quiz' });
});
router.post('/qz', (req,res) => {
  var answer = "hellow";
  res.render('quiz', { title: 'Quiz', ans: answer });
});

module.exports = router;
