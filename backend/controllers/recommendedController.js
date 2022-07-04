const catchAsync = require('../middleware/catchAsync');
const Template = require('../models/templateModule');
const ErrorHandler = require('../utils/errorhandler');
const Recommended = require('../models/recommendedModel');

exports.getCount = catchAsync(async (req, res, next) => {
	const getId = req.params.id;

	const allData = await Recommended.find();

	const check = allData.find((e) => getId == e.template);

	const recommendedData = await Recommended.findById(check._id);

	const updateCount = {
		count: recommendedData.count + 1,
	};
	const getTemplate = await Template.findById(recommendedData.template);
	await Recommended.findByIdAndUpdate(recommendedData._id, updateCount, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		recommendedData,
		getTemplate,
	});
});

exports.createRecommendedTemplate = catchAsync(async (req, res, mext) => {
	const { count, template } = req.body;

	const addTemplate = await Recommended.create({
		count,
		template,
	});

	res.status(200).json({
		success: true,
		addTemplate,
	});
});

exports.getRecommendation = catchAsync(async (req, res, next) => {
	const allData = await Recommended.find();

	res.status(200).json({
		success: true,
		allData,
	});
});
