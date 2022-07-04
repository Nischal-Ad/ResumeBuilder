const express = require('express');
const {
	getCount,
	createRecommendedTemplate,
	getRecommendation,
} = require('../controllers/recommendedController');

const router = express.Router();

router.route('/getcount/:id').get(getCount);
router.route('/getrecommendation').get(getRecommendation);
router.route('/createrecommendation').post(createRecommendedTemplate);

module.exports = router;
