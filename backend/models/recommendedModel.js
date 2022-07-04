const mongoose = require('mongoose');
const recommendedSchema = new mongoose.Schema({
	count: {
		type: Number,
		default: 0,
		required: true,
	},
	template: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Recommended', recommendedSchema);
