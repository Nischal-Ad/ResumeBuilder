const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please enter your name'],
		minLength: [4, 'name must be at least 4 characters'],
		maxLength: [20, 'name cannot exceed 20 characters'],
	},
	email: {
		type: String,
		required: [true, 'please enter your email'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'please enter a valid email'],
	},
	password: {
		type: String,
		required: [true, 'please enter your password'],
		select: false,
	},
	cpassword: {
		type: String,
		required: [true, 'please enter your password'],
		validate: {
			// This only works on CREATE and SAVE!!!
			validator: function (el) {
				return el === this.password;
			},
			message: 'your password are not same',
		},
	},
	role: {
		type: String,
		enum: {
			values: ['user', 'admin'],
			message: 'Please enter a valid role',
		},
		default: 'user',
	},

	resetPasswordToken: String,
	resetPasswordExpire: Date,
});

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
	modulusLength: 2048,
});

const encrypt = (pass) => {
	const encryptedData = crypto.publicEncrypt(
		{
			key: publicKey,
			padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
			oaepHash: 'sha512',
		},
		// We convert the data string to a buffer using `Buffer.from`
		Buffer.from(pass)
	);
	return encryptedData.toString('base64');
};

const decrypt = (pass) => {
	const decryptedData = crypto.privateDecrypt(
		{
			key: privateKey,
			padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
			oaepHash: 'sha512',
		},
		(encryptedData = crypto.publicEncrypt(
			{
				key: publicKey,
				padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
				oaepHash: 'sha512',
			},
			// We convert the data string to a buffer using `Buffer.from`
			Buffer.from(pass)
		))
	);

	// The decrypted data is of the Buffer type, which we can convert to a
	// string to reveal the original data
	return decryptedData.toString();
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	//hash password
	this.password = await encrypt(this.password);

	//delete confirmPassword feild in database
	this.cpassword = undefined;
	next();
});

// jwt token
userSchema.methods.getJWTToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
	enteredPassword = await decrypt(enteredPassword);
	return await (enteredPassword, this.password);
};

//generating password reset token
userSchema.methods.getResetPasswordToken = async function () {
	//generating token
	const resetToken = crypto.randomBytes(20).toString('hex');

	//hashing and adding to userschema
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

	return resetToken;
};

module.exports = mongoose.model('User', userSchema);
