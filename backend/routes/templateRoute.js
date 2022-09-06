const express = require('express');
const { isAuth } = require('../middleware/auth');
const {
	createTemplate,
	getTemplates,
	getTemplate,
	uploadTemplate,
	deleteTemplate,
	binarySearch,
} = require('../controllers/templateController');

const router = express.Router();

router.route('/createtemplate').post(isAuth, uploadTemplate, createTemplate);
router.route('/getalltemplate').get(getTemplates);
router
	.route('/gettemplate/:id')
	.get(isAuth, getTemplate)
	.delete(isAuth, deleteTemplate);

module.exports = router;
