const express = require('express');
const { isAuth, roles } = require('../middleware/auth');
const {
	getAllUsers,
	updateUser,
	deleteUser,
	registerUser,
	loginUser,
	forgetPassword,
	resetPassword,
	updateProfile,
	getMe,
	logout,
	updatePassword,
	updateRole,
	getUser,
} = require('../controllers/userController');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/forgetpassword').post(forgetPassword);

//protected routes for all authorized user
router.route('/password/reset/:token').put(isAuth, resetPassword);
router.route('/profile').get(isAuth, getMe);
router.route('/changepassword').put(isAuth, updatePassword);
router.route('/updateprofile').put(isAuth, updateProfile);
router.route('/updaterole/:id').put(isAuth, updateRole);
router.route('/logout').get(isAuth, logout);
router
	.route('/user/:id')
	.put(isAuth, updateUser)
	.delete(isAuth, deleteUser)
	.get(isAuth, getUser);

router.route('/users').get(isAuth, roles('admin'), getAllUsers);

module.exports = router;
