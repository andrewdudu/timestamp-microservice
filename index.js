const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const moment = require('moment');
const index = require('./controllers/index');
const timestamps = require('./controllers/timestamps');

var ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001,'localhost');
console.log('Listening on 3001');
app.get('/', index);

app.get('/:input', timestamps);


