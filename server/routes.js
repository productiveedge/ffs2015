'use strict';
/*
API Routes:
--
 */

var routes = [
    {
        method : 'GET',
        path : '/',
        handler : {
            file : "./.build/index.html"
        }
    },{
        method : 'GET',
        path : '/{param*}',
        handler : {
            directory: {
                path: './.build/'
            }
        }
    },
    {
        method : "GET",
        path : '/user',
        handler : require("./handler/user/user-register.js")
    }
];

module.exports = routes;


