import React from 'react';
import MetaData from '../../../extra/MetaData';
import { useSelector } from 'react-redux';
import { EditForm } from '../../form/Form';
import { useParams } from 'react-router-dom';

const EditResume = () => {
	const { id } = useParams();
	const { resume: getAllResume } = useSelector((state) => state.allResume);

	const editResume = getAllResume.find((e) => e._id === id);

	return (
		<div>
			{' '}
			<MetaData title={`template--${editResume?.name}`} />
			<section className='container mx-auto mt-16'>
				<div>
					<EditForm {...editResume} />
				</div>
			</section>
		</div>
	);
};

export default EditResume;
