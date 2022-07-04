import React from 'react';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import About from '../img/about.png';

const AboutUs = () => {
	return (
		<>
			<section className='container mx-auto px-2 pt-20' id='about'>
				<div className='md:flex items-center'>
					<div className='md:w-1/2'>
						<div className='font-poppins flex items-center text-sm font-bold text-green-800'>
							<RiCheckboxMultipleBlankLine />
							&nbsp; About Us
						</div>
						<h2 className=' pb-2'>All About Us</h2>
						<p>
							Our solution is a free web application that generates creative and
							personalized proffesional resumes with little effort.These
							templates will provide a user-friendly experience and a larger
							scope of options to utilize the user’s creativity.
						</p>
					</div>
					<div className='md:w-1/2'>
						<img className='' alt='' src={About} />
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
