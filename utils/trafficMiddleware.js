const trafficLogger = (req, res, next) => {
	console.log(`Request for: ${ req.url }`);
	next();
}

module.exports = trafficLogger;
