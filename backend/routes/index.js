var express = require('express');
var router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var userModel = require("../models/userModel");
var projectModel = require("../models/projectModel");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const secret = "secret"; // secret key for jwt






module.exports = router;
