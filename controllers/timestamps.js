const moment = require('moment');

module.exports = (req, res) => {
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
}

function natToUnix(date) {
  // Conver from natural date to unix timestamp
  return moment(date, "MMMM D, YYYY").format("X");
}

function unixToNat(unix) {
  // Convert unix timestamp to natural date
  return moment.unix(unix).format("MMMM D, YYYY");
}