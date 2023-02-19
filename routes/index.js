var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hair Care' });
});

router.get('/a', function(req, res, next) {
  res.render('attribute', { title: 'About'});
});

router.get('/qz', function(req, res, next) {
  res.render('quiz', { title: 'Quiz', reply: " " });
});
router.post('/qz', (req,res) => {
  var ans = req.body.q1;
  var answer;
  if (ans=="no") {
    answer = "Correct!";
  } else {
    answer = "Wrong! Sorry!"
  }
  res.render('quiz', { title: 'Quiz', reply: answer });
});

module.exports = router;
