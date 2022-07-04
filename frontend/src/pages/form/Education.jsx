import React, { useContext } from 'react';
import { StepperContext } from './StepperContext';

const Education = () => {
	const { formdata, setformData } = useContext(StepperContext);
	return (
		<>
			<div className='form flex '>
				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Department</p>
					</span>
					<input
						type='text'
						className='form-input mr-2'
						placeholder='Department'
						value={formdata.department}
						onChange={(e) =>
							setformData({ ...formdata, department: e.target.value })
						}
						required
					/>
				</div>

				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Collage / University</p>
					</span>
					<input
						type='text'
						className='form-input ml-2'
						placeholder='Collage / University '
						value={formdata.collage}
						onChange={(e) =>
							setformData({ ...formdata, collage: e.target.value })
						}
						required
					/>
				</div>
			</div>

			<div className='form flex '>
				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Start Date</p>
					</span>
					<input
						type='date'
						className='form-input mr-2'
						value={formdata.startDate}
						onChange={(e) =>
							setformData({ ...formdata, startDate: e.target.value })
						}
						required
					/>
				</div>

				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;End Date</p>
					</span>
					<input
						type='date'
						className='form-input ml-2'
						value={formdata.endDate}
						onChange={(e) =>
							setformData({ ...formdata, endDate: e.target.value })
						}
						required
					/>
				</div>
			</div>
		</>
	);
};

export default Education;
