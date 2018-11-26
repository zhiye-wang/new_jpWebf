var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
	username:String,
	password:Number
})

var userModel = mongoose.model('users',Schema);
module.exports = userModel;