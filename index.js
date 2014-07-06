#!/usr/bin/env node
config = require('./config');

util = require('util');
mysql = require('mysql');

EventEmitter = require('events').EventEmitter;
DB = require('db');

var db = new DB();

db.on('ready', function (e) {
	console.log(e);
});