import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { clearError, addAdmin } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../extra/MetaData';

const Sign = () => {
	const dispatch = useDispatch();

	const { error, loading, success } = useSelector((state) => state.newadmin);

	const alert = toast;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [name, setName] = useState('');

	const addAdmindata = (e) => {
		e.preventDefault();
		dispatch(addAdmin(name, email, password, cpassword));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
		if (success) {
			window.location.reload(false);
			alert.success('Admin added successfully');
		}
	}, [dispatch, error, alert, success]);
	return (
		<>
			<MetaData title={'Add Admin'} />
			<section className='container mx-auto'>
				<div className='bg-gray-50 shadow-xl p-5 lg:w-[45%] md:w-[65%] sm:w-[80%] w-full mx-auto mt-[15vh] rounded-md'>
					<h3 className='text-center underline underline-offset-8'>
						Add Admin
					</h3>
					<form onSubmit={addAdmindata}>
						<div className='border-b-2 border-gray-500 my-10'>
							<label htmlFor='Username' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Enter Admin Username
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
								Enter Admin Email
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
								Enter Admin Password
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
								Confirm Admin Password
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
								{loading ? 'loading...' : 'Add Admin'}
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Sign;
