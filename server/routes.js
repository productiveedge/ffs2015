'use strict';

var routes = [
    {
        method: 'GET',
        path: '/api/users',
        handler: require("./handler/user/user-browse.js")
    },
    {
        method : 'POST',
        path: '/api/user',
        handler : require('./handler/user/user-add.js')
    },
    {
        method : 'GET',
        path : '/',
        handler : {
            file : "./client/index.html"
        }
    },{
        method : 'GET',
        path : '/{param*}',
        handler : {
            directory: {
                path: './client/'
            }
        }
    }
];

module.exports = routes;


