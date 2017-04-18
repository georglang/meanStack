var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbConfig = require('config');

// every request is forwarded to the routes
var appRoutes = require('./routes/app');

var app = express();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');



app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'dist')));

// for CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});



// app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.render('index');
});



mongoose.connect(dbConfig.url);
const dbConnection = mongoose.connection;

db.on('error', function () {
  console.log('MongoDB: Connection ERROR');
});

db.once('open', function () {
  console.log('MongoDB: Connected');
  appRoutes(app);

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/', 'index.html'));
  });

  app.listen(app.get('port', function () {
    console.log('Listening on Port: ' + app.get('port'));
  }));
});






module.exports = app;
