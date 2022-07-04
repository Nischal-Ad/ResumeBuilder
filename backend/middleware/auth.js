const catchAsync = require('./catchAsync');
const ErrorHandler = require('../utils/errorhandler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.isAuth = catchAsync(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) return next(new ErrorHandler('please login first', 401));

	const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

	req.user = await User.findById(decodedData.id);

	next();
});

exports.roles = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(new ErrorHandler('sorry you cannot access this page', 403));
		}
		next();
	};
};
