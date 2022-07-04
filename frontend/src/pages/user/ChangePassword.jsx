import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, changePassword } from '../../actions/userAction';
import { toast } from 'react-toastify';
import { CHANGE_PASSWORD_RESET } from '../../constants/userConstants';
import { useNavigate } from 'react-router';
import MetaData from '../../extra/MetaData';

const ChangePassword = () => {
	const dispatch = useDispatch();

	const alert = toast;

	const nevigate = useNavigate();

	const { error, isUpdated, loading } = useSelector((state) => state.password);

	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const updatePassword = (e) => {
		e.preventDefault();

		dispatch(changePassword(oldPassword, newPassword, cpassword));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		if (isUpdated) {
			alert.success('passowrd changed successfully');
			nevigate('/');
		}

		dispatch({
			type: CHANGE_PASSWORD_RESET,
		});
	}, [dispatch, error, alert, nevigate, isUpdated]);

	return (
		<>
			<MetaData title={'Change Password'} />
			<section className='container mx-auto'>
				<div className='bg-gray-50 shadow-xl p-5 lg:w-[45%] md:w-[65%] sm:w-[80%] w-full mx-auto mt-[15vh] rounded-md'>
					<h3 className='text-center underline underline-offset-8'>
						Change Password
					</h3>
					<form onSubmit={updatePassword}>
						{' '}
						<div className='border-b-2 border-gray-500 my-10'>
							<label htmlFor='Password' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Enter Your Old Password
							</label>
							<input
								className='bg-gray-50 outline-none w-full px-6 mt-2'
								type='password'
								placeholder='********'
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
								required
							/>
						</div>{' '}
						<div className='border-b-2 border-gray-500 my-10'>
							<label htmlFor='Password' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Enter Your New Password
							</label>
							<input
								className='bg-gray-50 outline-none w-full px-6 mt-2'
								type='password'
								placeholder='********'
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								required
							/>
						</div>{' '}
						<div className='border-b-2 border-gray-500 my-10'>
							<label htmlFor='Password' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Confirm Your New Password
							</label>
							<input
								className='bg-gray-50 outline-none w-full px-6 mt-2'
								type='password'
								placeholder='********'
								value={cpassword}
								onChange={(e) => setCpassword(e.target.value)}
								required
							/>
						</div>
						<div className='flex justify-center'>
							<button
								className={`text-white w-1/2 font-poppins font-medium px-5 py-2 rounded-full bg-orange-600 `}
								type='submit'
								disabled={loading ? true : false}
							>
								Change Passowrd
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default ChangePassword;
