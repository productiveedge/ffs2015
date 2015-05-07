"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var profileSchema = new Schema({
    name : String,
    token : {
        type : String,
        index : true
    }
});

mongoose.model("profileSchema", profileSchema);