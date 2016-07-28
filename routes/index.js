'use strict';
require('babel-register')({
    presets: ['react']
});

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var ReactApp = require("../views/Components/ReactApp");
var reactString = ReactDOMServer.renderToString(React.createElement(ReactApp));
var Passport = require("../config/passport");

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/notlogged');
    }
}

router.get('/', function(req, res) {
    res.render('index.ejs', {reactHTML : reactString});
});



module.exports = router;