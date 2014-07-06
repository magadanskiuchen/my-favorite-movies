#!/usr/bin/env node
config = require('./config');

util = require('util');
mysql = require('mysql');

EventEmitter = require('events').EventEmitter;
DB = require('db');
MyFavoriteMovies = require('my-favorite-movies');

db = new DB();
app = new MyFavoriteMovies();