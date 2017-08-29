var summaryDAO = require('./dao/SummaryByLocationDAO.js');

summaryDAO.summaryByLocation(e => {
	console.log(e);
});