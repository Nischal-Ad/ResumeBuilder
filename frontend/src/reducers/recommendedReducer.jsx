import {
	CREATE_REQUEST,
	CREATE_SUCCESS,
	CREATE_FAIL,
	CLEAR_ERRORS,
	GET_REQUEST,
	GET_SUCCESS,
	GET_FAIL,
	GET_ALL_REQUEST,
	GET_ALL_SUCCESS,
	GET_ALL_FAIL,
} from '../constants/recommendedConstants';

export const createRecommended = (
	state = { createRecommended: [] },
	action
) => {
	switch (action.type) {
		case CREATE_REQUEST:
			return {
				loading: true,
				data: [],
			};

		case CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				data: action.payload,
			};

		case CREATE_FAIL:
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

export const getData = (state = { Recommended: {} }, action) => {
	switch (action.type) {
		case GET_REQUEST:
			return {
				loading: true,
				data: [],
			};

		case GET_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				template: action.payload.getTemplate,
				data: action.payload.recommendedData,
			};

		case GET_FAIL:
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

export const getAllData = (state = { allRecommended: [] }, action) => {
	switch (action.type) {
		case GET_ALL_REQUEST:
			return {
				loading: true,
				data: [],
			};

		case GET_ALL_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				data: action.payload,
			};

		case GET_ALL_FAIL:
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
