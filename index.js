const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const moment = require('moment');
const index = require('./controllers/index');
const timestamps = require('./controllers/timestamps');

var ejs = require('ejs');
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function (){
  console.log('Listening on 3001');
  app.get('/', index);

  app.get('/:input', timestamps);

});


