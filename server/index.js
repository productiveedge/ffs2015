"use strict";

var config = require("./config.js");

var hapi = require("hapi");
var path = require("path");
var hapi = require("hapi");
var path = require("path");
var url = require("url");
var fs = require("fs");
var mongoose = require("mongoose");
var hoek = require("hoek");
var plugins = require("./plugins");
var routes = require("./routes");


var redisUrl = config.get("redisUrl");

/*
var serverOptions = {
    cache: {
        engine: require("catbox-redis"),
        name: "redis",
        host: redisUrl.hostname,
        port: redisUrl.port,
        expiresIn: 3600000,
        cache: "redis"
    }
};


*/

var server = new hapi.Server(),
    _i, route, _len;
server.connection({
    port : config.get("port")
});

server.route(routes);

var db = mongoose.connect("mongodb://localhost/ffs").connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function (callback) {
    //load all files in models dir
    fs.readdirSync(__dirname + '/models').forEach(function(filename) {
        if (~filename.indexOf('.js')){
            require(__dirname + '/models/' + filename);
        }
    });
    onComposed();
    //server.register(plugins, onComposed)
});

function onComposed(err){
    if(err){
        logger.error("onComposed", err, {});
    }
    server.start(function () {

        console.log("Server running at:", server.info.uri);
    });
}
