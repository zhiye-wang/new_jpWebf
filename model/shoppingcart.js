var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
	username:String,
	name:String,
	price:Number,
	number:Number,
	img:String
})

var userModel = mongoose.model('carts',Schema);
module.exports = userModel;