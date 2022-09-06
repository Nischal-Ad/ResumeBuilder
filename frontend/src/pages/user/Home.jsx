import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import RecommendedData from './resumes/RecommendedData';
import { clearError } from '../../actions/resumeAction';
import { loadAllTemplate } from '../../actions/templateAction';
import MetaData from '../../extra/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import SampleList from './resumes/SampleList';
import Loading from '../../extra/Loading';

const Home = () => {
	const alert = toast;

	const dispatch = useDispatch();

	const { error, loading, resume } = useSelector((state) => state.allResume);

	useEffect(() => {
		let search = '';
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
		dispatch(loadAllTemplate(search));
	}, [dispatch, error, alert]);

	const totalresume = resume.length;

	if (totalresume < 1) {
		var size = true;
	}

	return (
		<>
			<MetaData title='Home' />;
			{loading ? (
				<Loading />
			) : (
				<section className='container mx-auto mt-16'>
					{size && (
						<h2 className='text-center mt-4 underline underline-offset-8 underline-gray-700 mb-11'>
							You haven't created any resume yet !
						</h2>
					)}
					<div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 content-between'>
						{resume.map((tmp, index) => {
							return <SampleList key={index} {...tmp} />;
						})}
					</div>
					<div className='border-[1px] border-gray-500'></div>
					<h2 className='text-center mt-4 underline underline-offset-8 underline-gray-700'>
						Most Used Templates
					</h2>
					<RecommendedData />
					{/* <Sample Resume={Resume} /> */}
				</section>
			)}
		</>
	);
};

export default Home;
