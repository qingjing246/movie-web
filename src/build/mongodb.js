/**
 * Created by 青靖1 on 2017-04-28.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movie');
var db = mongoose.connection;

var schema = new mongoose.Schema();

db.movies = db.model("database",schema,"database");

module.express = db;
