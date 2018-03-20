const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const moment = require('moment');
var ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001,'localhost');
console.log('Listening on 3001');
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/:input', (req, res) => {
  var date = req.params.input;
  var unix = null;
  var natural = null;

  // Check for initial unix time
  if (+date >= 0) {
      unix = +date;
      natural = unixToNat(unix);
  }

  // Check for initial natural time
  if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
      unix = +natToUnix(date);
      natural = unixToNat(unix);
  }

  var dateObj = { "unix": unix, "natural": natural };
res.send(dateObj);
  res.render('date.ejs', { date: req.params.input });
});

function natToUnix(date) {
  // Conver from natural date to unix timestamp
  return moment(date, "MMMM D, YYYY").format("X");
}

function unixToNat(unix) {
  // Convert unix timestamp to natural date
  return moment.unix(unix).format("MMMM D, YYYY");
}
