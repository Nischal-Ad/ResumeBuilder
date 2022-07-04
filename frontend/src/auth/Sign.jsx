import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { clearError, register } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

const Sign = () => {
	const dispatch = useDispatch();

	const { error, isAuthenticated, loading } = useSelector(
		(state) => state.user
	);

	const nevigate = useNavigate();

	const alert = toast;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [name, setName] = useState('');

	const create = (e) => {
		e.preventDefault();

		dispatch(register(name, email, password, cpassword));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
		if (isAuthenticated) {
			nevigate('/');
			window.location.reload(false);
		}
	}, [dispatch, nevigate, error, alert, isAuthenticated]);
	return (
		<>
			<form onSubmit={create}>
				<div className='border-b-2 border-gray-500 my-10'>
					<label htmlFor='Username' className='text-sm font-quicksand'>
						<span className='text-red-600 text-bold'>* </span>
						Enter Your Username
					</label>
					<input
						className='bg-gray-50 outline-none w-full px-6 mt-2'
						type='text'
						placeholder='xyz'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className='border-b-2 border-gray-500 my-10'>
					<label htmlFor='Email' className='text-sm font-quicksand'>
						<span className='text-red-600 text-bold'>* </span>
						Enter Your Email
					</label>
					<input
						className='bg-gray-50 outline-none w-full px-6 mt-2'
						type='email'
						placeholder='abc@gmail.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='border-b-2 border-gray-500 my-10'>
					<label htmlFor='Password' className='text-sm font-quicksand'>
						<span className='text-red-600 text-bold'>* </span>
						Enter Your Password
					</label>
					<input
						className='bg-gray-50 outline-none w-full px-6 mt-2'
						type='password'
						placeholder='********'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className='border-b-2 border-gray-500 my-10'>
					<label htmlFor='Cpassword' className='text-sm font-quicksand'>
						<span className='text-red-600 text-bold'>* </span>
						Confirm Your Password
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
				<div className='flex justify-center mb-2'>
					<button
						className='bg-blue-800 text-white w-1/2 font-poppins font-medium px-5 py-2 rounded-full'
						type='submit'
					>
						{loading ? 'loading...' : 'Sign-In'}
					</button>
				</div>
			</form>
		</>
	);
};

export default Sign;
