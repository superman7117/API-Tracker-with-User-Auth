var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');
var User = require('../models/user');

router.use(authMiddleware);

/* GET home page. */
router.get('/', authMiddleware, function(req, res, next) {
  // show my
  User.findById(req.user._id, function(err, user) {
    var thistheme = user.theme
    res.status(err ? 400 : 200).send(err || thistheme);
  });

});

router.post('/', function(req, res, next) {
console.log("hello");
});

module.exports = router;
