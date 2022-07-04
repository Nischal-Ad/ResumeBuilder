import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { clearError, loadAllTemplate } from '../../actions/templateAction';
import { useDispatch, useSelector } from 'react-redux';
import GetAllTemplate from '../../extra/sample/SampleMain';
import MetaData from '../../extra/MetaData';
import Loading from '../../extra/Loading';

const Alltemplate = () => {
	const alert = toast;

	const dispatch = useDispatch();

	const { error, loading, template } = useSelector((state) => state.template);

	useEffect(() => {
		dispatch(loadAllTemplate());

		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
	}, [dispatch, error, alert]);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<section className='container mx-auto pt-20'>
					<MetaData title={'Resumes'} />
					<div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 content-between'>
						{template?.map((tmp, index) => {
							return <GetAllTemplate key={index} {...tmp} />;
						})}
					</div>
				</section>
			)}
		</>
	);
};

export default Alltemplate;
