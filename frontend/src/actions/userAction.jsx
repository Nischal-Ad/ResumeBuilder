import axios from 'axios';
import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	CLEAR_ERRORS,
	LOGIN_REQUEST,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	REGISTER_REQUEST,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_SUCCESS,
	CHANGE_PASSWORD_FAIL,
	FORGET_PASSWORD_REQUEST,
	FORGET_PASSWORD_SUCCESS,
	FORGET_PASSWORD_FAIL,
	ALL_USER_REQUEST,
	ALL_USER_SUCCESS,
	ALL_USER_FAIL,
	DEL_USER_REQUEST,
	DEL_USER_SUCCESS,
	DEL_USER_FAIL,
	REGISTER_ADMIN_REQUEST,
	REGISTER_ADMIN_SUCCESS,
	REGISTER_ADMIN_FAIL,
	UPDATE_ROLE_REQUEST,
	UPDATE_ROLE_SUCCESS,
	UPDATE_ROLE_FAIL,
} from '../constants/userConstants';

export const addAdmin =
	(name, email, password, cpassword) => async (dispatch) => {
		try {
			dispatch({ type: REGISTER_ADMIN_REQUEST });

			const config = { headers: { 'Content-Type': 'application/json' } };
			const { data } = await axios.post(
				`/api/v1/register`,
				{ name, email, password, cpassword, role: 'admin' },
				config
			);

			dispatch({
				type: REGISTER_ADMIN_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: REGISTER_ADMIN_FAIL,
				payload: error.response.data.message,
			});
		}
	};

export const updateRole = (id, getrole) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_ROLE_REQUEST });

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.put(
			`/api/v1/updateRole/${id}`,
			{ role: getrole },
			config
		);

		dispatch({
			type: UPDATE_ROLE_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_ROLE_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const delUser = (id) => async (dispatch) => {
	try {
		dispatch({ type: DEL_USER_REQUEST });

		const { data } = await axios.delete(`/api/v1/user/${id}`);

		dispatch({
			type: DEL_USER_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: DEL_USER_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.post(
			`/api/v1/login`,

			{ email, password },
			config
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
	}
};

export const register =
	(name, email, password, cpassword) => async (dispatch) => {
		try {
			dispatch({ type: REGISTER_REQUEST });

			const config = { headers: { 'Content-Type': 'application/json' } };
			const { data } = await axios.post(
				`/api/v1/register`,

				{ name, email, password, cpassword },
				config
			);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: data.user,
			});
		} catch (error) {
			dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
		}
	};

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const { data } = await axios.get(`/api/v1/profile`);

		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
	}
};

export const loadAllUser = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_USER_REQUEST });

		const { data } = await axios.get(`/api/v1/users`);

		dispatch({
			type: ALL_USER_SUCCESS,
			payload: data.users,
		});
	} catch (error) {
		dispatch({ type: ALL_USER_FAIL, payload: error.response.data.message });
	}
};

export const logout = () => async (dispatch) => {
	try {
		await axios.get(`/api/v1/logout`);

		dispatch({
			type: LOGOUT_SUCCESS,
		});
	} catch (error) {
		dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
	}
};

export const changePassword =
	(oldPassword, newPassword, cpassword) => async (dispatch) => {
		try {
			dispatch({ type: CHANGE_PASSWORD_REQUEST });

			const config = { headers: { 'Content-Type': 'application/json' } };
			const { data } = await axios.put(
				`/api/v1/changepassword`,

				{ oldPassword, newPassword, cpassword },
				config
			);

			dispatch({
				type: CHANGE_PASSWORD_SUCCESS,
				payload: data.success,
			});
		} catch (error) {
			dispatch({
				type: CHANGE_PASSWORD_FAIL,
				payload: error.response.data.message,
			});
		}
	};

export const clearError = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};

export const forgetPassword = (email) => async (dispatch) => {
	try {
		dispatch({ type: FORGET_PASSWORD_REQUEST });

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.post(
			`/api/v1/forgetpassword`,

			{ email },
			config
		);

		dispatch({
			type: FORGET_PASSWORD_SUCCESS,
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: FORGET_PASSWORD_FAIL,
			payload: error.response.data.message,
		});
	}
};
