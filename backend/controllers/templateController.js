const Template = require('../models/templateModule');
const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middleware/catchAsync');
const multer = require('multer');
const path = require('path');
const BinarySearch = require('../utils/BinarySearch');
const { version } = require('os');

const configFile = path.join(__dirname, '../../frontend/public/template');

const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, configFile);
	},
	filename: (req, file, cb) => {
		const ext = file.mimetype.split('/')[1];
		cb(null, `template-${Date.now()}-${file.originalname}`);
	},
});

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('text')) {
		cb(null, true);
	} else {
		cb(new ErrorHandler('please enter a file', 400), false);
	}
};

const upload = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
});

exports.uploadTemplate = upload.single('template');

//writing api data to database
exports.createTemplate = catchAsync(async (req, res, next) => {
	// const data = await Template.create(templates);
	const { name, desc } = req.body;
	const template = req.file.filename;

	const data = await Template.create({
		name,
		desc,
		template,
	});

	res.status(200).json({
		success: true,
		data,
	});
});

exports.getTemplates = catchAsync(async (req, res, next) => {
	const binarySearch = new BinarySearch(
		await Template.find(),
		req.query
	).search();

	const template = await binarySearch.query;
	res.status(200).json({
		success: true,
		template,
	});
});

exports.getTemplate = catchAsync(async (req, res, next) => {
	const template = await Template.findById(req.params.id);

	if (!template) {
		return next(new ErrorHandler('template not found', 404));
	}

	res.status(200).json({
		success: true,
		template,
	});
});

exports.deleteTemplate = catchAsync(async (req, res, next) => {
	const data = await Template.findById(req.params.id);

	if (!data) {
		return next(new ErrorHandler('template not found', 404));
	}

	await data.remove();
	res.status(200).json({
		success: true,
		message: 'template deleted',
	});
});
