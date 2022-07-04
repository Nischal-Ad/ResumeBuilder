import React from 'react';
import SampleMain from './SampleMain';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';

const Sample = ({ Resume }) => {
	const Samples = [...Resume];

	const toggleSample = Samples.map((sample, index) => {
		return <SampleMain key={index} {...sample} />;
	});

	return (
		<>
			<section className='container mx-auto pt-20' id='samples'>
				<div className='font-poppins flex items-center text-sm font-bold text-green-800'>
					<RiCheckboxMultipleBlankLine />
					&nbsp; Samples
				</div>
				<h2 className='pb-2'>Samples</h2>
				<div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 content-between'>
					{toggleSample}
				</div>
			</section>
			;
		</>
	);
};

export default Sample;
