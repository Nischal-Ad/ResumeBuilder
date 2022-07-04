import React, { useContext } from 'react';
import { StepperContext } from './StepperContext';

const Basic = () => {
	const { formdata, setformData } = useContext(StepperContext);

	return (
		<>
			<div className='form'>
				<div className=''>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Name</p>
					</span>
					<input
						type='text'
						className='form-input'
						placeholder='Name'
						value={formdata.name}
						onChange={(e) => setformData({ ...formdata, name: e.target.value })}
						required
					/>
				</div>
			</div>

			<div className='form flex'>
				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Email</p>
					</span>
					<input
						type='text'
						className='form-input mr-2 '
						placeholder='Email'
						value={formdata.email}
						onChange={(e) =>
							setformData({ ...formdata, email: e.target.value })
						}
						required
					/>
				</div>

				<div className='w-full'>
					{' '}
					<span className='form-span'>
						* <p>&nbsp;Phone</p>
					</span>
					<input
						type='number'
						className='form-input ml-2'
						placeholder='Phone'
						value={formdata.phone}
						onChange={(e) =>
							setformData({ ...formdata, phone: e.target.value })
						}
						required
					/>
				</div>
			</div>

			<div className='form flex'>
				<div className='w-full'>
					{' '}
					<span className='form-span'>
						<p>&nbsp;Linkdin Link</p>
					</span>
					<input
						type='text'
						className='form-input mr-2'
						placeholder='Linkdin Link'
						value={formdata.linkdin}
						onChange={(e) =>
							setformData({ ...formdata, linkdin: e.target.value })
						}
					/>
				</div>

				<div className='w-full'>
					{' '}
					<span className='form-span'>
						<p>&nbsp;Github Link</p>
					</span>
					<input
						type='text'
						className='form-input ml-2'
						placeholder='Github Link'
						value={formdata.github}
						onChange={(e) =>
							setformData({ ...formdata, github: e.target.value })
						}
					/>
				</div>
			</div>

			<div className='form'>
				{' '}
				<span className='form-span'>
					* <p>&nbsp;Summary</p>
				</span>
				<textarea
					type='text'
					className='form-input'
					placeholder='Summary'
					value={formdata.job}
					onChange={(e) => setformData({ ...formdata, job: e.target.value })}
					required
				/>
			</div>

			<div className='form'>
				<span className='form-span'>
					* <p>&nbsp;Skills</p>
				</span>
				<textarea
					className='form-input'
					type='text'
					placeholder='Your Skills'
					value={formdata.skills}
					onChange={(e) => setformData({ ...formdata, skills: e.target.value })}
					required
				/>
			</div>
		</>
	);
};

export default Basic;
