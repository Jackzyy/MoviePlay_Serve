var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const admin = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    sex:Number,
    desc:String
},{timestamps:{createdAt:'createdAt',updatedAt:'updatedAt'}});

var adminModel = mongoose.model('admin', admin)

module.exports = adminModel