const ANONYMOUS = 'anonymous';
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var config = require('../config/config');

exports.verify = function(req, res, next) {
  var authorizationHeader = req.get('Authorization');
  if (authorizationHeader) {
    var token = authorizationHeader.split(" ")[1];
    jwt.verify(token, config.jwt.secret, function(err, decoded) {
      User.findOne({_id: decoded}).select('-password -__v').exec(function(err, user) {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(401).json({message: 'The user isn\'t registered'});
        }
      });
    });
  } else {
    req.user = {
      type: ANONYMOUS
    };
    next();
  }
};
