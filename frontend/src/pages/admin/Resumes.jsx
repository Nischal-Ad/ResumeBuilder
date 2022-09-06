import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../extra/MetaData';
import { loadAllTemplate, clearError } from '../../actions/templateAction';
import GetAllTemplate from '../../extra/GetAllTemplate';
import Loading from '../../extra/Loading';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Resumes = () => {
	const { template, loading, error } = useSelector((state) => state.template);

	const alert = toast;

	const dispatch = useDispatch();

	useEffect(() => {
		let search = '';
		dispatch(loadAllTemplate(search));

		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
	}, [dispatch, error, alert]);

	return (
		<>
			<MetaData title={'All Resumes'} />
			{loading ? (
				<Loading />
			) : (
				<>
					<section className='container mt-[70px] mx-auto'>
						<div className='my-2'>
							<Link
								to='/addtemplate'
								className='ml-4 my-2 bg-blue-700 text-white px-2 py-1 rounded-md'
							>
								Add Template
							</Link>
						</div>
						<table className='table-auto text-center bg-gray-100 rounded-lg w-full'>
							<thead className='  text-gray-600 '>
								<tr className=''>
									<th className='py-2'>S.N</th>
									<th>Name</th>
									<th>Desc</th>
									<th>Template</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody className='bg-white text-gray-700'>
								{template
									.sort((a, b) => (a.name > b.name ? 1 : -1))
									.map((temp, index) => {
										return (
											<GetAllTemplate key={index} {...temp} index={index} />
										);
									})}
							</tbody>
						</table>
					</section>
				</>
			)}
		</>
	);
};

export default Resumes;
