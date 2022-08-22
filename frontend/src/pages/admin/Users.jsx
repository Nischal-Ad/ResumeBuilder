import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../extra/MetaData';
import { clearError } from '../../actions/userAction';
import GetAllUser from '../../extra/GetAllUser';
import Loading from '../../extra/Loading';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Users = () => {
	const [search, setSearch] = useState('');

	const { users, loading, error } = useSelector((state) => state.admin);

	const alert = toast;

	const dispatch = useDispatch();

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
	}, [dispatch, error, alert]);
	return (
		<>
			<MetaData title='All Users' />
			{loading ? (
				<Loading />
			) : (
				<>
					{' '}
					<section className='container mt-[70px] mx-auto'>
						<div className='flex justify-between items-center mb-2'>
							<div className='my-2'>
								<Link
									to='/addadmin'
									className='ml-4 my-2 bg-blue-700 text-white px-2 py-1 rounded-md'
								>
									Add Admin
								</Link>
							</div>

							<div className='border-b-2 border-gray-500'>
								<input
									className=' outline-none w-full px-6 mt-2'
									type='text'
									placeholder='search...'
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
						</div>
						<table className='table-auto text-center bg-gray-100 rounded-lg w-full'>
							<thead className='  text-gray-600 '>
								<tr className=''>
									<th className='py-2'>S.N</th>
									<th>Name</th>
									<th>Email</th>
									<th>Role</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody className='bg-white text-gray-700'>
								{users
									.filter(
										(user) =>
											user.name.includes(search) || user.email.includes(search)
									)
									.sort((a, b) =>
										a.name > b.name ? 1 : -1 && a.role > b.role ? 1 : -1
									)
									.map((user, index) => {
										return <GetAllUser key={index} {...user} index={index} />;
									})}
							</tbody>
						</table>
					</section>
				</>
			)}
		</>
	);
};

export default Users;
