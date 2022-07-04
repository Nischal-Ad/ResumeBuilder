import React, { useEffect, useState } from 'react';
import { delUser, clearError, updateRole } from '../actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const GetAllUser = ({ name, email, role, index, _id }) => {
	const [newRole, setNewRole] = useState(role === 'admin' ? 'admin' : 'user');
	const { isDeleted, error, isUpdated } = useSelector((state) => state.deluser);

	const alert = toast;

	const dispatch = useDispatch();

	const nevigate = useNavigate();

	const delOneUser = (id) => {
		dispatch(delUser(id));
		alert.success('User Deleted Successfully');
	};

	const updateUserRole = (id, getrole) => {
		dispatch(updateRole(id, getrole));
		alert.success('User updated Successfully');
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		if (isDeleted) {
			window.location.reload(false);
			nevigate('/users');
		}
		if (isUpdated) {
			window.location.reload(false);
			nevigate('/users');
		}
	}, [dispatch, alert, error, isDeleted, nevigate, isUpdated]);

	return (
		<>
			<tr className='border-b-[1px] border-gray-500'>
				<td className='py-2'>{index + 1}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>
					<select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
						<option value={role}>{role}</option>
						<option value={role === 'admin' ? 'user' : 'admin'}>
							{role === 'admin' ? 'user' : 'admin'}{' '}
						</option>
					</select>
				</td>
				<td className=''>
					<button
						className='mr-4 my-2 bg-green-700 text-white px-2 py-1 rounded-md'
						onClick={() => updateUserRole(_id, newRole)}
					>
						Update
					</button>
					<button
						className='ml-4 my-2 bg-red-700 text-white px-2 py-1 rounded-md'
						onClick={() => delOneUser(_id)}
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default GetAllUser;
