import React, { Fragment } from 'react';

const StepperControl = ({ handleClick, currentStep, steps }) => {
	return (
		<Fragment>
			<section className='container flex justify-around mb-4'>
				<button
					className={`text-blue-400 uppercase py-1 px-4 rounded-xl font-semibold cursor-pointer border-2 ${
						currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					onClick={() => handleClick()}
				>
					Back
				</button>
				<button
					type={currentStep === 4 ? 'submit' : 'button'}
					className='text-green-400 uppercase py-1 px-4 rounded-xl font-semibold cursor-pointer border-2'
					onClick={() => handleClick('next')}
				>
					{currentStep === steps.length ? 'confirm' : 'next'}
				</button>
			</section>
		</Fragment>
	);
};

export default StepperControl;
