var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var feed = require("feed-read");

/* API's */
router.get('/Upcoming', function(req, res, next) {
	request.get('http://www.nasdaq.com/earnings/earnings-calendar.aspx?date=2016-Feb-29', function(error, message, html){
		$ = cheerio.load(html);

		var stockArr = [];

		$('#ECCompaniesTable > tr').each(function(i, elem) {
		  stockArr[i] = $(this).html();
		});

		stockArr.join(', ');

		res.send(stockArr);
	});

});

module.exports = router;
