const mongoose = require('mongoose');
const validator = require('validator');
const resumeSchema = new mongoose.Schema({
	name: {
		type: String,
		// required: [true, 'please enter your name'],
		minLength: [4, 'name must be at least 4 characters'],
		maxLength: [20, 'name cannot exceed 20 characters'],
	},
	email: {
		type: String,
		required: [true, 'please enter your email'],
		lowercase: true,
		unique: false,
		validate: [validator.isEmail, 'please enter a valid email'],
	},
	github: {
		type: String,
		default: '',
	},
	linkdin: {
		type: String,
		default: '',
	},
	job: {
		type: String,
		required: [true, 'please enter your summary'],
	},
	phone: {
		type: Number,
		required: [true, 'please enter your number'],
		maxLength: [10, 'number cannot exceed 10 characters'],
		minLength: [10, 'number cannot less than 10 characters'],
	},
	department: {
		type: String,
		required: [true, 'please enter your department'],
		maxLength: [20, 'department cannot exceed 20 characters'],
	},
	collage: {
		type: String,
		required: [true, 'please enter your collage'],
		maxLength: [20, 'collage cannot exceed 20 characters'],
	},
	skills: {
		type: String,
		required: [true, 'please enter your skills'],
	},
	startDate: {
		type: String,
		required: [true, 'please enter your startdate'],
	},
	endDate: {
		type: String,
		required: [true, 'please enter your endDate'],
	},
	workJob: {
		type: String,
		maxLength: [20, 'workJob cannot exceed 20 characters'],
		required: [true, 'please enter your working title'],
	},
	companyName: {
		type: String,
		required: [true, 'please enter your working company name'],

		maxLength: [20, 'companyName cannot exceed 20 characters'],
	},
	workDesc: {
		type: String,
		required: [true, 'please enter your work desc'],
	},
	workstartDate: {
		type: String,
		required: [true, 'please enter your work start date'],
	},
	workendDate: {
		type: String,
		required: [true, 'please enter your work end date'],
	},
	// photo: {
	// 	type: String,
	// 	default: '',
	// },
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	template: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Resume', resumeSchema);
