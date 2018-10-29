var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const movie = new Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'admin'
    },
    movieUrl:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:{createdAt:'createdAt',updatedAt:'updatedAt'}});

var movieModel = mongoose.model('movie', movie)

module.exports = movieModel