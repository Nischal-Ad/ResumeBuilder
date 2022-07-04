const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middleware/catchAsync');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/semdEmail');
const crypto = require('crypto');

// register a new user
exports.registerUser = catchAsync(async (req, res, next) => {
	const { name, email, password, cpassword, role } = req.body;

	const user = await User.create({
		name,
		email,
		password,
		cpassword,
		role,
	});

	sendToken(user, 201, res);
});

// login user
exports.loginUser = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	//check if user has given both email & password
	if (!email || !password) {
		return next(new ErrorHandler('please enter email & password', 400));
	}

	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		return next(new ErrorHandler('invalid email or password', 401));
	}

	const isPasswordMatch = await user.comparePassword(password);

	if (!isPasswordMatch) {
		return next(new ErrorHandler('invalid email or password', 401));
	}

	sendToken(user, 200, res);
});

//logout
exports.logout = catchAsync(async (req, res, next) => {
	res.cookie('token', null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});
	res.status(200).json({
		success: true,
		message: 'logged out',
	});
});

//get user detail
exports.getUser = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(new ErrorHandler('User not found', 404));
	}

	res.status(200).json({
		success: true,
		user,
	});
});

//get me
exports.getMe = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.user.id);

	res.status(200).json({
		success: true,
		user,
	});
});

//update password
exports.updatePassword = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('+password');

	const passMatched = await user.comparePassword(req.body.oldPassword);

	if (!passMatched) {
		return next(new ErrorHandler('old password is incorrect', 400));
	}

	if (req.body.newPassword !== req.body.cpassword) {
		return next(new ErrorHandler("password doesn't match", 400));
	}

	user.password = req.body.newPassword;
	user.cpassword = req.body.cpassword;

	await user.save();

	sendToken(user, 200, res);
});

//update Profile
exports.updateProfile = catchAsync(async (req, res, next) => {
	const newUserData = {
		email: req.body.email,
	};

	const user = User.findByIdAndUpdate(req.user.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
	});
});

//get all users
exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.find();
	res.status(200).json({
		success: true,
		users,
	});
});

//update user
exports.updateUser = catchAsync(async (req, res, next) => {
	let user = await User.findById(req.params.id);

	if (!user) {
		return next(new ErrorHandler('User not found', 404));
	}

	user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		user,
	});
});

//delete user
exports.deleteUser = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(new ErrorHandler('User not found', 404));
	}

	await user.remove();
	res.status(200).json({
		success: true,
		message: 'User deleted',
	});
});

//forget password
exports.forgetPassword = catchAsync(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });

	if (!user) return next(new ErrorHandler('User not found', 404));

	//get reset password token
	const resetToken = user.getResetPasswordToken();

	await user.save({ validateBeforeSave: false });

	const resetPasswordUrl = `${req.protocol}://${req.get(
		'host'
	)}/api/v1/password/reset/${resetToken}`;

	const message = `your password reset token is :- \n \n ${resetPasswordUrl}`;

	try {
		await sendEmail({
			email: user.email,
			subject: `resume password recovery`,
			message,
		});
		res.status(200).json({
			success: true,
			message: 'email send successfully',
		});
	} catch (err) {
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save({ validateBeforeSave: false });

		return next(new ErrorHandler(err.message, 500));
	}
});

// reset password
exports.resetPassword = catchAsync(async (req, res, next) => {
	//creating token hash
	const resetPasswordToken = crypto
		.createHash('sha256')
		.update(req.params.token)
		.digest('hex');

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});

	if (!user) {
		return next(
			new ErrorHandler(
				'reset password token is invalid or has been expired',
				404
			)
		);
	}

	if (req.body.password !== req.body.comparepassword) {
		return next(new ErrorHandler('password does not match', 400));
	}

	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;

	await user.save();

	sendToken(user, 200, res);
});

//updating role
exports.updateRole = catchAsync(async (req, res, next) => {
	const newRole = {
		role: req.body.role,
	};

	const user = await User.findByIdAndUpdate(req.params.id, newRole, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	if (!user) {
		return next(new ErrorHandler('User not found', 400));
	}

	res.status(200).json({
		success: true,
		message: 'User role updated successfully',
	});
});
