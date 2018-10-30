var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var history = require('connect-history-api-fallback')
var db = require('./dataBase/config')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


var indexRouter = require('./routes/index');

var app = express();

app.use(session({
  secret: 'laoz',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  store: new MongoStore({
    url:'mongodb://119.23.15.173/MoviePlayer',
    ttl: 1 * 24 * 60 * 60 //一天
  })
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(history());
app.use('/public',express.static('public'))
app.use(express.static(path.join(__dirname, 'dist')));

//全局验证用户是否登录
app.use('*', (req, res, next) => {
  let url = req.originalUrl
  if((url == '/collections'|| url == '/iscollections'|| url == '/cancelCollect') && !req.session.user){
     return res.json({
       code:201,
       msg:'用户未登录'
     });
  }
  next()
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
