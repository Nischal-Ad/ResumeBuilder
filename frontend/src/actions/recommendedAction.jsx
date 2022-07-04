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
import axios from 'axios';

export const createrecommendation = (_id) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_REQUEST });

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.post(
			`/api/v1/createrecommendation`,

			{
				template: _id,
			},
			config
		);

		dispatch({
			type: CREATE_SUCCESS,
			payload: data.addTemplate,
		});
	} catch (error) {
		dispatch({ type: CREATE_FAIL, payload: error.response.data.message });
	}
};

export const getAllRecommendation = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_REQUEST });

		const { data } = await axios.get(`/api/v1/getrecommendation`);

		dispatch({
			type: GET_ALL_SUCCESS,
			payload: data.allData,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const getCount = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_REQUEST });

		const { data } = await axios.get(`/api/v1/getcount/${id}`);

		dispatch({
			type: GET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const clearError = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
