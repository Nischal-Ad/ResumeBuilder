const express = require('express');
const { isAuth } = require('../middleware/auth');
const {
	collectTemplateData,
	getFormData,
	getResumeDetails,
	deleteResume,
	updateResume,
	// uploadPhoto,
	// collectTemplateDataImage,
} = require('../controllers/resumeController');

const router = express.Router();

router.route('/createresume').post(isAuth, collectTemplateData);
// router
// 	.route('/createresumephoto')
// 	.post(isAuth, uploadPhoto, collectTemplateDataImage);
router.route('/getmyresume').get(isAuth, getFormData);
router.route('/getmyresume/:id').get(getResumeDetails).put(updateResume);
router.route('/delmyresume/:id').delete(isAuth, deleteResume);

module.exports = router;
