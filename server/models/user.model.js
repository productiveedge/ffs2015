"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name : String,
    googleId :{
        type : Number,
        index : true
    },
    token : {
        type : String,
        index : true
    }
});

mongoose.model("user", userSchema);