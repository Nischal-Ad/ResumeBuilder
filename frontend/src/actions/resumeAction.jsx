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
	DEL_RESUME_REQUEST,
	DEL_RESUME_SUCCESS,
	DEL_RESUME_FAIL,
	GET_RESUME_FAIL,
	UPDATE_RESUME_REQUEST,
	UPDATE_RESUME_SUCCESS,
	UPDATE_RESUME_FAIL,
} from '../constants/resumeConstants';
import axios from 'axios';

export const dataCollect = (formdata, templateId) => async (dispatch) => {
	try {
		dispatch({ type: DATA_SEND_REQUEST });

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.post(
			`/api/v1/createresume`,

			{
				name: formdata.name,
				email: formdata.email,
				github: formdata.github,
				linkdin: formdata.linkdin,
				job: formdata.job,
				phone: formdata.phone,
				department: formdata.department,
				collage: formdata.collage,
				skills: formdata.skills,
				startDate: formdata.startDate,
				endDate: formdata.endDate,
				workJob: formdata.workJob,
				companyName: formdata.companyName,
				workDesc: formdata.workDesc,
				workstartDate: formdata.workstartDate,
				workendDate: formdata.workendDate,
				template: templateId,
			},
			config
		);

		dispatch({
			type: DATA_SEND_SUCCESS,
			payload: data.resume,
		});
	} catch (error) {
		dispatch({ type: DATA_SEND_FAIL, payload: error.response.data.message });
	}
};

export const UpdateResume = (_id, formdata) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_RESUME_REQUEST });

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.put(
			`/api/v1/getmyresume/${_id}`,
			{
				name: formdata.name,
				email: formdata.email,
				github: formdata.github,
				linkdin: formdata.linkdin,
				job: formdata.job,
				phone: formdata.phone,
				department: formdata.department,
				collage: formdata.collage,
				skills: formdata.skills,
				startDate: formdata.startDate,
				endDate: formdata.endDate,
				workJob: formdata.workJob,
				companyName: formdata.companyName,
				workDesc: formdata.workDesc,
				workstartDate: formdata.workstartDate,
				workendDate: formdata.workendDate,
			},
			config
		);

		dispatch({
			type: UPDATE_RESUME_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_RESUME_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const clearError = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};

export const getAllResume = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_RESUME_REQUEST });

		const { data } = await axios.get(`/api/v1/getmyresume`);

		dispatch({
			type: GET_ALL_RESUME_SUCCESS,
			payload: data.resume,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_RESUME_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const getResume = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_RESUME_REQUEST });

		const { data } = await axios.get(`/api/v1/getmyresume/${id}`);

		dispatch({
			type: GET_RESUME_SUCCESS,
			payload: data.resume,
		});
	} catch (error) {
		dispatch({
			type: GET_RESUME_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const delresume = (id) => async (dispatch) => {
	try {
		dispatch({ type: DEL_RESUME_REQUEST });

		const { data } = await axios.delete(`/api/v1/delmyresume/${id}`);

		dispatch({
			type: DEL_RESUME_SUCCESS,
			payload: data.success,
		});
	} catch (error) {
		dispatch({
			type: DEL_RESUME_FAIL,
			payload: error.response.data.message,
		});
	}
};
