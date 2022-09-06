import {
	FAIL,
	SUCCESS,
	REQUEST,
	ONE_FAIL,
	ONE_REQUEST,
	ONE_SUCCESS,
	CLEAR_ERRORS,
	DEL_ONE_REQUEST,
	DEL_ONE_SUCCESS,
	DEL_ONE_FAIL,
	ADD_REQUEST,
	ADD_SUCCESS,
	ADD_FAIL,
} from '../constants/templateConstants';

export const templateReducer = (state = { template: [] }, action) => {
	switch (action.type) {
		case ADD_REQUEST:
		case REQUEST:
			return {
				loading: true,
				template: [],
				templatedata: [],
			};
		case SUCCESS:
			return {
				...state,
				loading: false,
				template: action.payload,
				templatedata: action.payload,
			};
		case ADD_SUCCESS:
			return {
				...state,
				loading: false,
				template: action.payload,
				templatedata: action.payload,
			};

		case FAIL:
		case ADD_FAIL:
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

export const delTemplate = (state = { delTemplate: {} }, action) => {
	switch (action.type) {
		case DEL_ONE_REQUEST:
			return {
				...state,
				loading: true,
			};
		case DEL_ONE_SUCCESS:
			return {
				...state,
				loading: false,
				isDeleted: action.payload,
			};
		case DEL_ONE_FAIL:
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

export const onetemplateReducer = (state = { onetemplate: {} }, action) => {
	switch (action.type) {
		case ONE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ONE_SUCCESS:
			return {
				loading: false,
				// templatedata: action.payload.template,

				template: action.payload.template,
			};

		case ONE_FAIL:
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
