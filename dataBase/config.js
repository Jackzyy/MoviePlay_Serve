const mongoose = require('mongoose');
mongoose.connect('mongodb://119.23.15.173/MoviePlayer',{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('已连接云数据库');
});