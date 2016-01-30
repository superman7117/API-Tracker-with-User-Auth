var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "StarWars Theme" });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/resetpass', function(req, res, next) {
  res.render('resetpass');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/userpage', authMiddleware, function(req, res, next) {
console.log('req.user:', req.user)
  res.render('userpage');
});



router.get('/secret', authMiddleware, function(req, res, next) {
  console.log('req.user:', req.user);
  res.send('Wooo!  Secret stuff!!!');
});

module.exports = router;
