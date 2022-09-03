import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../extra/Loading';
import Chart from 'react-apexcharts';

const AdminHome = () => {
	const { template } = useSelector((state) => state.template);
	const { users, loading } = useSelector((state) => state.admin);
	const { data: recommendedData } = useSelector(
		(state) => state.allRecommended
	);
	const [admin, setAdmin] = useState(0);
	const [user, setUser] = useState(0);
	const [templateName, setTemplateName] = useState([]);
	const [countData, setCountData] = useState([]);

	useEffect(() => {
		var adminCount = 0;
		var userCount = 0;
		for (let i = 0; i < users?.length; i++) {
			if (users[i].role === 'admin') {
				adminCount = adminCount + 1;
			} else {
				userCount = userCount + 1;
			}
		}
		setAdmin(adminCount);
		setUser(userCount);

		const name = [];
		const countdata = [];

		for (let i = 0; i < recommendedData?.length; i++) {
			countdata.push(recommendedData[i].count);
			let check = template?.find((e) => e._id === recommendedData[i].template);
			name.push(check?.name);
		}
		setCountData(countdata);
		setTemplateName(name);
	}, [template, recommendedData, users]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<section className='container mt-[70px] mx-auto'>
					<div className='flex justify-around text-white'>
						<div className='bg-gradient-to-r from-orange-800 to-orange-500 px-10 py-3'>
							<h3>Total Admins</h3>
							<h6>{admin}</h6>
						</div>
						<div className='bg-gradient-to-r from-blue-800 to-blue-500 px-10 py-3'>
							<h3>Total Users</h3>
							<h6>{user}</h6>
						</div>
						<div className='bg-gradient-to-r from-red-800 to-red-500 px-10 py-3'>
							<h3>Total Template</h3>
							<h6>{template && template.length}</h6>
						</div>
					</div>
					<hr className='my-10' />

					<div className='flex justify-center'>
						<Chart
							type='pie'
							width={500}
							height={550}
							series={countData}
							options={{
								title: { text: 'Template Used' },
								noData: { text: 'no template yet' },
								labels: templateName,
							}}
						/>
					</div>
				</section>
			)}
		</>
	);
};

export default AdminHome;
