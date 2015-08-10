'use strict';

var mongoose = require('mongoose');
var Boom = require("boom");

module.exports = userAdd;

function userAdd(req, reply){
    var User = mongoose.model('user');

    var user = new User(req.payload);

    user.save(function(err, data){
        if(!err) {
            reply(data);
        }else{
            reply(Boom.methodNotAllowed("Unable to add the page."));
        }
    });

}
