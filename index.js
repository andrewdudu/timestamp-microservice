const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

var ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var db;

app.listen(3001,'localhost');
console.log('Listening on 3001');
app.get('/', (req, res) => {
  res.render('index.ejs')
});
