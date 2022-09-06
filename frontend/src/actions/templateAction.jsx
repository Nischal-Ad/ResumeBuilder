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
import axios from 'axios';

export const loadAllTemplate = (search) => async (dispatch) => {
	try {
		dispatch({ type: REQUEST });

		const { data } = await axios.get(`api/v1/getalltemplate?search=${search}`);

		dispatch({
			type: SUCCESS,
			payload: data.template,
		});
	} catch (error) {
		dispatch({ type: FAIL, payload: error.response.data.message });
	}
};

export const loadTemplate = (id) => async (dispatch) => {
	try {
		dispatch({ type: ONE_REQUEST });

		const { data } = await axios.get(`/api/v1/gettemplate/${id}`);

		dispatch({
			type: ONE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({ type: ONE_FAIL, payload: error.response.data.message });
	}
};

export const clearError = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};

export const delTemplate = (id) => async (dispatch) => {
	try {
		dispatch({ type: DEL_ONE_REQUEST });

		const { data } = await axios.delete(`/api/v1/gettemplate/${id}`);

		dispatch({
			type: DEL_ONE_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: DEL_ONE_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const addTemplate = (name, desc, file) => async (dispatch) => {
	try {
		dispatch({ type: ADD_REQUEST });

		const config = { headers: { 'Content-Type': 'multipart/form-data' } };
		const { data } = await axios.post(
			`/api/v1/createtemplate`,
			{ name, desc, template: file },
			config
		);

		dispatch({
			type: ADD_SUCCESS,
			payload: data.data,
		});
	} catch (error) {
		dispatch({
			type: ADD_FAIL,
			payload: error.response.data.message,
		});
	}
};
