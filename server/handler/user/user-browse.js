'use strict';

var mongoose = require('mongoose');

module.exports = userBrowse;

function userBrowse(req, res){

    mongoose.model('user').find({}).exec().then(function(data){
        res(data);
    }, function(err){
        res(err);
    });

}