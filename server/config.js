var convict = require("convict");

var config = convict({
    port : {
        description : "Port for the ffs",
        default : 8081,
        env : "PO_TALENT_PORT"
    },
    redisUrl: {
        doc: 'Host for connecting to redis',
        default: 'http://127.0.0.1:6379',
        env: 'REDIS_URL'
    }
});

config.validate();
module.exports = config;
return module.exports;