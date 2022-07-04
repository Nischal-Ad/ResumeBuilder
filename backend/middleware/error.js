const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || 'Internal Server Error';

	// wrong mongodb error
	if (err.name === 'CastError') {
		const message = `resource not found: ${err.path}`;
		err = new ErrorHandler(message, 400);
	}

	//mongoose dublicate key error
	if (err.code === 11000) {
		const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
		err = new ErrorHandler(message, 400);
	}

	//wrong JWT errors
	if (err.name == 'JsonWebTokenError') {
		const message = `json web token is invalid try again`;
		err = new ErrorHandler(message, 400);
	}

	//JWT expires errors
	if (err.name == 'TokenExpiredError') {
		const message = `json web token is expired try again`;
		err = new ErrorHandler(message, 400);
	}

	res.status(err.statusCode).json({
		success: false,
		message: err.message,
	});
};
