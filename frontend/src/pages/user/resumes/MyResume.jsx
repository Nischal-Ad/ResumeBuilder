import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { clearError, getResume } from '../../../actions/resumeAction';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../../extra/MetaData';
import Loading from '../../../extra/Loading';
import { useParams } from 'react-router-dom';

const MyResume = () => {
	const alert = toast;

	const dispatch = useDispatch();

	const { id } = useParams();

	const { error, loading, resume } = useSelector((state) => state.oneResume);
	const { templatedata } = useSelector((state) => state.template);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
		dispatch(getResume(id));
	}, [dispatch, error, alert, id]);
	const resumeTemplate = templatedata.find((e) => e._id === resume?.template);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<MetaData title={`resume--${resume?.name}`} />
					<section className='container mx-auto mt-16'>
						<iframe
							src={`/template/${resumeTemplate?.template}`}
							frameBorder='0'
							className='w-full h-[100vh]'
							id={resume?._id}
							title='resume'
						/>
					</section>
				</>
			)}
		</>
	);
};

export default MyResume;
