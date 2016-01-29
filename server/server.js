"use strict";

var express = require('express');
var middleware = require('./config/middleware.js');

var app = express();

middleware(app, express); 

exports = module.exports = app;