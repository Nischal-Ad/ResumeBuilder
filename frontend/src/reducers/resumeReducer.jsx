import {
	CLEAR_ERRORS,
	DATA_SEND_FAIL,
	DATA_SEND_SUCCESS,
	DATA_SEND_REQUEST,
	GET_ALL_RESUME_REQUEST,
	GET_ALL_RESUME_SUCCESS,
	GET_ALL_RESUME_FAIL,
	GET_RESUME_REQUEST,
	GET_RESUME_SUCCESS,
	GET_RESUME_FAIL,
	DEL_RESUME_REQUEST,
	DEL_RESUME_SUCCESS,
	DEL_RESUME_FAIL,
	UPDATE_RESUME_REQUEST,
	UPDATE_RESUME_SUCCESS,
	UPDATE_RESUME_FAIL,
} from '../constants/resumeConstants';

export const templateDataCollect = (state = { dataCollect: [] }, action) => {
	switch (action.type) {
		case DATA_SEND_REQUEST:
			return {
				loading: true,
				template: [],
			};

		case DATA_SEND_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				template: action.payload,
			};

		case DATA_SEND_FAIL:
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

export const updateReducer = (state = { updateResume: {} }, action) => {
	switch (action.type) {
		case UPDATE_RESUME_REQUEST:
			return {
				...state,
				loading: true,
			};

		case UPDATE_RESUME_SUCCESS:
			return {
				...state,
				loading: false,
				isUpdated: action.payload,
			};

		case UPDATE_RESUME_FAIL:
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

export const getAllResume = (state = { allResume: [] }, action) => {
	switch (action.type) {
		case GET_ALL_RESUME_REQUEST:
			return {
				loading: true,
				resume: [],
			};

		case GET_ALL_RESUME_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				resume: action.payload,
			};

		case GET_ALL_RESUME_FAIL:
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

export const getResume = (state = { oneResume: {} }, action) => {
	switch (action.type) {
		case GET_RESUME_REQUEST:
			return {
				loading: true,
				resume: [],
			};

		case GET_RESUME_SUCCESS:
			return {
				...state,
				loading: false,
				resume: action.payload,
			};

		case GET_RESUME_FAIL:
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

export const delresume = (state = { resume: {} }, action) => {
	switch (action.type) {
		case DEL_RESUME_REQUEST:
			return {
				...state,
				loading: true,
			};
		case DEL_RESUME_SUCCESS:
			return {
				...state,
				loading: false,
				isDeleted: action.payload,
			};
		case DEL_RESUME_FAIL:
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
