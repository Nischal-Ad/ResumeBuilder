import React from 'react';
import Userfinal from '../../img/userfinal.png';
import MetaData from '../../extra/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Profile = () => {
	const { user } = useSelector((state) => state.user);

	const nevigate = useNavigate();

	const dispatch = useDispatch();

	const alert = toast;

	function logoutUser() {
		dispatch(logout());
		alert.success('logout successfully');
		nevigate('/');
	}

	return (
		<>
			<MetaData title='Profile' />;
			<section className='container mx-auto mt-16'>
				<div className='flex justify-center items-center'>
					<div className='bg-gray-100 p-4 mb-10 rounded-lg w-full md:w-1/2 mx-4'>
						<div className='p-4'>
							<div className='text-center mb-10  underline underline-offset-8 underline-gray-700 flex justify-center '>
								<img
									src={Userfinal}
									alt=''
									className='w-[100px] h-[100px] border-2 border-gray-200 rounded-full p-1'
								/>
							</div>
							<ul>
								<li>
									<h3>
										Name : <span>{user.name}</span>{' '}
									</h3>
								</li>

								<li>
									<h3>
										Email : <span>{user.email}</span>
									</h3>
								</li>
							</ul>

							<div className='flex justify-between items-center'>
								<Link to='/change/password'>
									<div className='text-white bg-orange-600 px-4 py-2 rounded-xl cursor-pointer'>
										Change Password
									</div>
								</Link>
								<div
									className='text-white bg-red-700 px-4 py-2 rounded-xl cursor-pointer'
									onClick={logoutUser}
								>
									Logout
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='border-[1px] border-gray-500'></div>

				<h2 className='text-center pt-10 underline underline-offset-8 underline-gray-700 mb-5'>
					Your Resume
				</h2>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 content-between'>
					{' '}
					here goes my resume
				</div>
			</section>
		</>
	);
};

export default Profile;
