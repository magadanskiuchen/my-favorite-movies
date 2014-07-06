#!/usr/bin/env node
config = require('./config');

util = require('util');
mysql = require('mysql');
csv = require('fast-csv');
fs = require('fs');

EventEmitter = require('events').EventEmitter;
DB = require('db');
MyFavoriteMovies = require('my-favorite-movies');

db = new DB();
app = new MyFavoriteMovies();