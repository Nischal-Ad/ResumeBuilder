import React, { useState, useEffect, useRef } from 'react';
import ProfileImg from '../img/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Profile = ({ drop }) => {
	const [active, setActive] = useState(false);

	const { user } = useSelector((state) => state.user);

	const nevigate = useNavigate();

	const dispatch = useDispatch();

	const alert = toast;

	const myref = useRef();

	function logoutUser() {
		dispatch(logout());
		alert.success('logout successfully');
		nevigate('/');
	}

	const handler = (e) => {
		if (!myref.current.contains(e.target)) {
			setActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	});

	return (
		<>
			<div
				ref={myref}
				className='rounded-full w-[30px]  my-0 p-0 cursor-pointer'
				onClick={() => setActive(!active)}
			>
				<img src={ProfileImg} alt='' className='p-1 bg-gray-200 rounded-full' />
			</div>

			{active && (
				<div className='absolute right-0 mr-[20px] mt-14  bg-gray-100 rounded-md'>
					<div className='px-5 py-2'>
						<p>{user.name}</p>
						<p>{user.email}</p>
						<hr className='border-black m-2' />

						<div className='flex flex-col'>
							<Link
								to='/change/password'
								className='text-white bg-orange-700 p-1 text-center rounded-lg m-1'
							>
								Change Password
							</Link>
							<button
								className='text-white bg-red-700 p-1 m-1 rounded-lg'
								onClick={logoutUser}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Profile;
