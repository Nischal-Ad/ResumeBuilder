import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGIN_REQUEST,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	REGISTER_REQUEST,
	CLEAR_ERRORS,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_SUCCESS,
	CHANGE_PASSWORD_RESET,
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

export const deluser = (state = { deluser: {} }, action) => {
	switch (action.type) {
		case DEL_USER_REQUEST:
		case UPDATE_ROLE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case UPDATE_ROLE_SUCCESS:
			return {
				...state,
				loading: false,
				isUpdated: action.payload,
			};

		case DEL_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isDeleted: action.payload,
			};
		case DEL_USER_FAIL:
		case UPDATE_ROLE_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const addAdminReducer = (state = { newadmin: {} }, action) => {
	switch (action.type) {
		case REGISTER_ADMIN_REQUEST:
			return {
				...state,
				loading: true,
			};

		case REGISTER_ADMIN_SUCCESS:
			return {
				loading: false,
				user: action.payload.user,
				success: action.payload.success,
			};

		case REGISTER_ADMIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const userReducer = (state = { user: [] }, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case REGISTER_REQUEST:
		case LOAD_USER_REQUEST:
			return {
				loading: true,
				isAuthenticated: undefined,
			};

		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
		case LOAD_USER_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				role: action.payload.role,
				user: action.payload,
			};

		case LOGOUT_SUCCESS:
			return {
				loading: false,
				user: null,
				isAuthenticated: false,
			};

		case LOGIN_FAIL:
		case REGISTER_FAIL:
			return {
				...state,
				user: null,
				loading: false,
				isAuthenticated: false,
				error: action.payload,
			};

		case LOAD_USER_FAIL:
			return {
				user: null,
				loading: false,
				isAuthenticated: false,
				error: action.payload,
			};

		case LOGOUT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const passwordReducer = (state = {}, action) => {
	switch (action.type) {
		case CHANGE_PASSWORD_REQUEST:
			return {
				...state,
				loading: true,
			};

		case CHANGE_PASSWORD_SUCCESS:
			return {
				...state,
				loading: false,
				isUpdated: action.payload,
			};

		case CHANGE_PASSWORD_RESET:
			return {
				...state,
				isUpdated: false,
			};

		case CHANGE_PASSWORD_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const forgetPasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case FORGET_PASSWORD_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};

		case FORGET_PASSWORD_SUCCESS:
			return {
				...state,
				loading: false,
				message: action.payload,
			};

		case FORGET_PASSWORD_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const adminReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case ALL_USER_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ALL_USER_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
			};

		case ALL_USER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
