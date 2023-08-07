//create web server

var express = require('express');
var router = express.Router();
var db = require('../models/db');
var Comment = require('../models/comment');

//get all comments
router.get('/', function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            return res.status(500).json({
                message: 'Error getting comments.'
            });
        }
        return res.json(comments);
    });
});

