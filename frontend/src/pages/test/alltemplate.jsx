import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { clearError, loadAllTemplate } from '../../actions/templateAction';
import { useDispatch, useSelector } from 'react-redux';
import GetAllTemplate from '../../extra/sample/SampleMain';
import MetaData from '../../extra/MetaData';
import Loading from '../../extra/Loading';
// import { useNavigate } from 'react-router-dom';

const Alltemplate = () => {
	const [data, setData] = useState('');
	const [search, setSearch] = useState('');

	const alert = toast;
	// const nevigate = useNavigate();
	const dispatch = useDispatch();

	const searchSubmitHandler = (e) => {
		e.preventDefault();
		if (data.trim()) {
			setSearch(data);
			// nevigate(`/resume?search=${data}`);
		}
	};
	const { error, loading, template } = useSelector((state) => state.template);
	let templatearr = [];
	if (Array.isArray(template)) {
		templatearr = template;
	} else {
		templatearr.push(template);
	}
	useEffect(() => {
		dispatch(loadAllTemplate(search));

		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
	}, [dispatch, error, alert, search]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<section className='container mx-auto pt-20'>
					<MetaData title={'Resumes'} />
					<form onSubmit={searchSubmitHandler} className='flex'>
						<div className=' my-2'>
							<input
								className=' py-2 px-6 outline-none mt-2 border-gary-400 border-b-2 rounded-md'
								type='text'
								placeholder='search...'
								value={data}
								onChange={(e) => setData(e.target.value)}
							/>
						</div>
						<input
							type='submit'
							value='Search'
							className='bg-blue-500 text-white font-poppins font-medium px-5 py-2 rounded-md my-5 cursor-pointer'
						/>
					</form>
					<div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 content-between'>
						{templatearr &&
							templatearr?.map((tmp, index) => {
								return <GetAllTemplate key={index} {...tmp} />;
							})}
					</div>
				</section>
			)}
		</>
	);
};

export default Alltemplate;
