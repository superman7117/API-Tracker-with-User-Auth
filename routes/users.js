'use strict';

var Firebase = require('firebase');
var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');

var User = require('../models/user');

var ref = new Firebase('https://authappozanne.firebaseio.com');

router.post('/register', function(req, res, next) {
  ref.createUser(req.body, function(err, userData) {
    if(err) return res.status(400).send(err);
    User.create(userData, function(err) {
      res.send();
    });
  });
});

router.post('/login', function(req, res, next) {
  ref.authWithPassword(req.body, function(err, authData) {
    if(err) return res.status(400).send(err);
    User.findOne({uid: authData.uid}, function(err, user) {
      var token = user.generateToken();
      res.cookie('mytoken', token).send();
    });
  });
});

router.post('/profile', authMiddleware, function(req, res) {
  //// logged in,   req.user
  // console.log(req.user,"!!!!!",req.body);
  var theme = req.body.theme;
  User.findById(req.user._id, function(err, user) {
    user.theme = theme;
    user.save(function(err, saveUser){
      console.log("saveUser",saveUser)
      console.log("Hello!");
      res.status(err ? 400 : 200).send(err || saveUser);
    });
  });
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('mytoken').redirect('/');
});


module.exports = router;
