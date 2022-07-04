import React, { useContext } from 'react';
import { StepperContext } from './StepperContext';

const WorkExp = () => {
	const { formdata, setformData } = useContext(StepperContext);
	return (
		<>
			<div className='form flex'>
				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Job Title</p>
					</span>
					<input
						type='text'
						className='form-input mr-2'
						placeholder='Job Title'
						value={formdata.workJob}
						onChange={(e) =>
							setformData({ ...formdata, workJob: e.target.value })
						}
						// required
					/>
				</div>

				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Company Name</p>
					</span>
					<input
						type='text'
						className='form-input ml-2'
						placeholder='Company Name'
						value={formdata.companyName}
						onChange={(e) =>
							setformData({ ...formdata, companyName: e.target.value })
						}
						// required
					/>
				</div>
			</div>

			<div className='form'>
				<span className='form-span'>
					* <p>&nbsp;Work Description</p>
				</span>
				<textarea
					className='form-input'
					type='text'
					placeholder='Work Description'
					value={formdata.workDesc}
					onChange={(e) =>
						setformData({ ...formdata, workDesc: e.target.value })
					}
					// required
				/>
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
						// required
						value={formdata.workstartDate}
						onChange={(e) =>
							setformData({ ...formdata, workstartDate: e.target.value })
						}
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
						// required
						value={formdata.workendDate}
						onChange={(e) =>
							setformData({ ...formdata, workendDate: e.target.value })
						}
					/>
				</div>
			</div>
		</>
	);
};

export default WorkExp;
