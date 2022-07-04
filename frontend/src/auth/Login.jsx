import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, login } from '../actions/userAction';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = ({ history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const alert = toast;

	const nevigate = useNavigate();

	const dispatch = useDispatch();

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user
	);

	const loginSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
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
	}, [dispatch, error, alert, nevigate, isAuthenticated]);

	return (
		<>
			<form onSubmit={loginSubmit}>
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
				<div className='border-b-2 border-gray-500 mt-10'>
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
				<div className='my-5'>
					<Link to='/password/forget'>
						{' '}
						<span className=''>Forgot Password ?</span>
					</Link>
				</div>
				<div className='flex justify-center mb-2'>
					<button
						className='bg-blue-500 text-white w-1/2 font-poppins font-medium px-5 py-2 rounded-full'
						type='submit'
						disabled={loading ? true : false}
					>
						{loading ? 'loading...' : 'login'}
					</button>
				</div>
			</form>
		</>
	);
};

export default Login;
