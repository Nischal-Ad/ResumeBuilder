import React from 'react';
import Hero from '../img/hero.png';
import { Link as Scroll } from 'react-scroll';

const Welcome = () => {
	return (
		<>
			<section
				className='bg-pattern bg-bottom animate__animated animate__fadeIn animate__slower'
				id='home'
			>
				<div className='bg-wave bg-bottom bg-cover md:bg-contain bg-no-repeat pb-24 mt-10'>
					<div className='pt-10 px-2 mx-auto container md:flex items-center text-white'>
						<div className='md:w-1/2 pt-10'>
							<div>
								<h2 className='pb-8'>Our service!! Your Confidence</h2>
								<h2>
									Welcome to
									<span className='font-poppins text-green text-4xl font-bold text-red-500'>
										{' '}
										Resume Builder
									</span>
								</h2>
								<p className='pt-5 md:pr-20 text-gray-300'>
									Resume templates that follow the exact ‘resume rules’
									employers look for.
								</p>

								<div className='py-8'>
									<Scroll
										smooth={true}
										duration={1000}
										to='samples'
										className='bg-red-500 py-3 px-16 rounded hover:bg-red-600 active:bg-red-600 duration-1000 cursor-pointer'
									>
										Create Resume
									</Scroll>
								</div>
							</div>
						</div>
						<div className='md:w-1/2 shape bg-slate-100 '>
							<img src={Hero} alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Welcome;
