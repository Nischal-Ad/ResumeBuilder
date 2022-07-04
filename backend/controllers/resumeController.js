const Resume = require('../models/resumeModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsync = require('../middleware/catchAsync');
// const multer = require('multer');
// const path = require('path');
// const { version } = require('os');

// const configFile = path.join(__dirname, '../../frontend/public/photo');

// const multerStorage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, configFile);
// 	},
// 	filename: (req, file, cb) => {
// 		const ext = file.mimetype.split('/')[1];
// 		cb(null, `photo-${Date.now()}-${file.originalname}`);
// 	},
// });

// const multerFilter = (req, file, cb) => {
// 	if (file.mimetype.startsWith('image')) {
// 		cb(null, true);
// 	} else {
// 		cb(new ErrorHandler('please enter a photo', 400), false);
// 	}
// };

// const upload = multer({
// 	storage: multerStorage,
// 	fileFilter: multerFilter,
// });

// exports.uploadPhoto = upload.single('photo');

// template with photo
// exports.collectTemplateDataImage = catchAsync(async (req, res, next) => {
// 	const {
// 		name,
// 		email,
// 		github,
// 		linkdin,
// 		job,
// 		phone,
// 		department,
// 		collage,
// 		skills,
// 		startDate,
// 		endDate,
// 		workJob,
// 		companyName,
// 		workDesc,
// 		workstartDate,
// 		workendDate,
// 		template,
// 	} = req.body;
// 	const photo = req.file.filename;

// 	const resume = await Resume.create({
// 		name,
// 		email,
// 		github,
// 		linkdin,
// 		job,
// 		phone,
// 		department,
// 		collage,
// 		skills,
// 		startDate,
// 		endDate,
// 		workJob,
// 		companyName,
// 		workDesc,
// 		workstartDate,
// 		workendDate,
// 		photo,
// 		template,
// 		user: req.user._id,
// 	});

// 	res.status(200).json({
// 		success: true,
// 		resume,
// 	});
// });

exports.collectTemplateData = catchAsync(async (req, res, next) => {
	const {
		name,
		email,
		github,
		linkdin,
		job,
		phone,
		department,
		collage,
		skills,
		startDate,
		endDate,
		workJob,
		companyName,
		workDesc,
		workstartDate,
		workendDate,
		template,
	} = req.body;

	const resume = await Resume.create({
		name,
		email,
		github,
		linkdin,
		job,
		phone,
		department,
		collage,
		skills,
		startDate,
		endDate,
		workJob,
		companyName,
		workDesc,
		workstartDate,
		workendDate,
		template,
		user: req.user._id,
	});

	res.status(200).json({
		success: true,
		resume,
	});
});

exports.updateResume = catchAsync(async (req, res, next) => {
	const {
		name,
		email,
		github,
		linkdin,
		job,
		phone,
		department,
		collage,
		skills,
		startDate,
		endDate,
		workJob,
		companyName,
		workDesc,
		workstartDate,
		workendDate,
	} = req.body;
	const resume = await Resume.findById(req.params.id);
	(resume.name = name),
		(resume.email = email),
		(resume.github = github),
		(resume.linkdin = linkdin),
		(resume.job = job),
		(resume.phone = phone),
		(resume.department = department),
		(resume.collage = collage),
		(resume.skills = skills),
		(resume.startDate = startDate),
		(resume.endDate = endDate),
		(resume.workJob = workJob),
		(resume.companyName = companyName),
		(resume.workDesc = workDesc),
		(resume.workstartDate = workstartDate),
		(resume.workendDate = workendDate),
		await resume.save();
	res.status(200).json({
		success: true,
	});
});

//getting all my templates
exports.getFormData = catchAsync(async (req, res, next) => {
	const resume = await Resume.find({
		user: req.user.id,
	});

	res.status(200).json({
		success: true,
		resume,
	});
});

exports.getResumeDetails = catchAsync(async (req, res, next) => {
	const resume = await Resume.findById(req.params.id);

	if (!resume) {
		return next(new ErrorHandler('Resume coundnot be found', 404));
	}

	res.status(200).json({
		success: true,
		resume,
	});
});

exports.deleteResume = catchAsync(async (req, res, next) => {
	const resume = await Resume.findById(req.params.id);

	if (!resume) {
		return next(new ErrorHandler('resume not found', 404));
	}

	await resume.remove();
	res.status(200).json({
		success: true,
		message: 'resume deleted',
	});
});
