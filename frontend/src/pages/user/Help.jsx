import React from 'react';
import FAQ from '../../apis/FAQ';
import UserFAQ from '../../extra/UserFAQ';
import MetaData from '../../extra/MetaData';

const Help = () => {
	const data = FAQ;
	return (
		<>
			<MetaData title='Help' />;
			<section className='container mx-auto mt-16'>
				<div className=' flex items-center justify-center flex-col'>
					<h1 className='mb-5 text-lg md:text-4xl'>
						Frequently Asked Questions ?
					</h1>
					{data.map((currentElement) => {
						return <UserFAQ key={currentElement.id} {...currentElement} />;
					})}
				</div>

				<div className='flex justify-center mt-10'>
					<div className='flex justify-between px-4 md:w-1/2 mx-4 w-full rounded-lg py-3 items-center  bg-gray-200'>
						<h4 className='w-[70%]'>
							Have Any Other Questions ? Contact us through Email
						</h4>
						<button className='bg-gray-300 p-2 font-semibold text-gray-800 rounded-lg'>
							<a href='mailto:nischaladhikari101@gmail.com'>Contact Us</a>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Help;
