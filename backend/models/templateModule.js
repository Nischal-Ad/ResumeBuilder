const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please enter your name'],
	},
	desc: {
		type: String,
		required: [true, 'please enter your desc'],
	},
	template: {
		type: String,
		required: [true, 'please enter your template'],
	},
});

module.exports = mongoose.model('Template', templateSchema);
