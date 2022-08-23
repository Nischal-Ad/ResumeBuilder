import React, { useState } from 'react';
import Logo from '../img/logo.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import Sign from '../auth/Sign';
import { useSelector } from 'react-redux';
import MetaData from '../extra/MetaData';

const Auth = () => {
	const [login, setLogin] = useState(true);

	const { loading } = useSelector((state) => state.user);

	return (
		<>
			<MetaData title='Login / Signup' />;
			<section className='container mx-auto'>
				<div className='ml-5 md:mb-0 mb-6'>
					<Link className='' to='/'>
						<AiOutlineArrowLeft className='text-5xl bg-gray-50 p-2 rounded-full duration-500 hover:scale-110' />
					</Link>
				</div>
				<div className='mx-3 mb-3'>
					<div className='bg-gray-50 shadow-xl p-5 lg:w-[45%] md:w-[65%] sm:w-[80%] w-full mx-auto rounded-md'>
						<div className=' flex justify-center'>
							<h3 className='text-lg font-semibold text-red-800 md:w-1/2 sm:w-2/3 flex justify-center border-b-2 border-gray-700'>
								{login ? '	Login To Your Account' : 'Create Your Account'}
							</h3>
						</div>
						<div className='w-full flex justify-center my-5'>
							<img
								src={Logo}
								alt=''
								className='w-[20%] bg-white flex rounded-full p-2'
							/>
						</div>{' '}
						{login ? <Login /> : <Sign />}
						<div className='flex justify-center mt-2 mb-2'>
							<button
								className={`${
									!login ? ' bg-blue-500' : 'bg-blue-800'
								} text-white w-1/2 font-poppins font-medium px-5 py-2 rounded-full`}
								type='submit'
								onClick={() => setLogin(!login)}
								disabled={loading ? true : false}
							>
								{login ? 'Sign-In' : 'Login'}
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Auth;
