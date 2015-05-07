"use strict";

var Boom = require('boom');

function validateToken( request, reply){
    if( request.session.get('token') && request.headers.token === request.session.get('token')){
        reply( request.session.token );
    }else{
        reply(Boom.unauthorized("You shall not pass."));
    }
}

module.exports = validateToken;