import React from 'react';
import { AiOutlineForm } from 'react-icons/ai';
import { FaWpforms, FaEdit } from 'react-icons/fa';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';

import { MdSaveAlt } from 'react-icons/md';

const Work = () => {
	return (
		<>
			<section className='container mx-auto py-20 ' id='work'>
				<div className='font-poppins flex items-center text-sm font-bold text-green-800'>
					<RiCheckboxMultipleBlankLine />
					&nbsp; How It Works
				</div>
				<h2 className='pb-2'>How It Works</h2>
				<div className='py-4 '>
					<div className='md:flex md:justify-around'>
						<div className=' grid justify-items-center px-2 p-5'>
							<AiOutlineForm className=' text-orange-500 text-8xl' />
							<h3>Step 1: Register</h3>
							<p className='text-center md:w-2/3'>
								Create an account by using your email id.
							</p>
						</div>
						<div className=' grid justify-items-center px-2 p-5'>
							<FaWpforms className=' text-orange-500 text-8xl' />
							<h3>Step 2: Complete Info</h3>
							<p className='text-center md:w-2/3'>
								Fill out your perosnal inforamtion and work history.
							</p>
						</div>
					</div>
					<div className='md:flex md:justify-around'>
						<div className=' grid justify-items-center px-2 p-5'>
							<FaEdit className=' text-orange-500 text-8xl' />
							<h3>Step 3: Customize</h3>
							<p className='text-center md:w-2/3'>
								Select and utilize the template on the basis of your field.
							</p>
						</div>
						<div className=' grid justify-items-center px-2 p-5'>
							<MdSaveAlt className=' text-orange-500 text-8xl ' />
							<h3>Step 4: Save & Print</h3>
							<p className='text-center md:w-2/3'>
								Download resume in pdf format and print.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Work;
