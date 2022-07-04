import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { clearError, loadTemplate } from '../../actions/templateAction';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../extra/MetaData';
import Loading from '../../extra/Loading';
import { useParams } from 'react-router-dom';
import Form from '../form/Form';

const Template = () => {
	const alert = toast;

	const dispatch = useDispatch();

	const { id } = useParams();

	const { error, loading, template } = useSelector(
		(state) => state.onetemplate
	);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		dispatch(loadTemplate(id));
	}, [dispatch, error, alert, id]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<MetaData title={`template--${template?.name}`} />

					<section className='container mx-auto mt-16'>
						{/* <div className='md:min-h-[85vh]'> */}
						<div>
							<Form />
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default Template;
