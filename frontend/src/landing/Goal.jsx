import React from 'react';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CgLoadbarSound } from 'react-icons/cg';
import { AiOutlineSliders } from 'react-icons/ai';

const Goal = () => {
	return (
		<>
			<section
				className='container mx-auto flex flex-col px-2 pt-20'
				id='goals'
			>
				<div className='font-poppins flex items-center text-sm font-bold text-green-800'>
					<RiCheckboxMultipleBlankLine />
					&nbsp; Our Goal
				</div>
				<h2 className='pb-2'>Our Goal</h2>
				<p className='md:text-center'>
					<b>Resume Builder</b> ,an informative online resume builder that
					allows its user to build organized and proffesionally formatted
					resume.
				</p>

				<div className='md:flex mx-auto md:mx-0 md:justify-around pt-10 text-orange-500'>
					<div className='grid justify-items-center'>
						<BsCurrencyDollar className='text-9xl bg-gray-100 p-3 rounded-full' />
						<p className='py-5'>FREE REGISTRATION</p>
					</div>
					<div className='grid justify-items-center'>
						<CgLoadbarSound className='text-9xl bg-gray-100 p-3 rounded-full' />
						<p className='py-5'>INFORMATIVE TEMPLATES</p>
					</div>
					<div className='grid justify-items-center'>
						<AiOutlineSliders className='text-9xl bg-gray-100 p-3 rounded-full' />
						<p className='py-5'>CUSTOMIZABILITY</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Goal;
