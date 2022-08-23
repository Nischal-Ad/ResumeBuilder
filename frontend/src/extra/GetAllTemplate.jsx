import React, { useEffect } from 'react';
import {
	delTemplate,
	clearError,
	loadAllTemplate,
} from '../actions/templateAction';
import { createrecommendation } from '../actions/recommendedAction';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
// import { loadAllUser } from '../actions/userAction';

const GetAllTemplate = ({ _id, name, desc, template, index }) => {
	const { error } = useSelector((state) => state.tempDel);
	const { data } = useSelector((state) => state.allRecommended);

	const alert = toast;

	const dispatch = useDispatch();

	const nevigate = useNavigate();

	const delTemp = (id) => {
		dispatch(delTemplate(id));
		alert.success('Template Deleted Successfully');
		dispatch(loadAllTemplate());
		nevigate('/resumes');
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
		const getTemplate = data.findIndex((e) => e.template === _id);
		if (getTemplate === -1) {
			dispatch(createrecommendation(_id));
		}

		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		// if (isDeleted) {
		// 	nevigate('/resumes');
		// }
	}, [dispatch, alert, error, data, _id]);

	return (
		<>
			<tr className='border-b-[1px] border-gray-500'>
				<td className='py-2'>{index + 1}</td>
				<td>{name}</td>
				<td>{desc}</td>
				<td>{template}</td>
				<td className=''>
					<button
						className='ml-4 my-2 bg-red-700 text-white px-2 py-1 rounded-md'
						onClick={() => delTemp(_id)}
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default GetAllTemplate;
