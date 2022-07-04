import React from 'react';
import { Link } from 'react-router-dom';

const Sample = ({ _id, name, desc, template }) => {
	return (
		<>
			<div className='px-5 py-3'>
				<div className='h-[70vh] border-2 broder-gray-200 rounded-xl'>
					<iframe
						src={`/template/${template}`}
						frameBorder='0'
						className='w-full h-full blur-[1px]'
						scrolling='no'
						title='template'
					/>
				</div>
				<div className='text-center py-2'>
					<h3>{name}</h3>
					<p>{desc}</p>
				</div>
				<Link
					to={`/resume/${_id}`}
					className='bg-blue-600 hover:bg-blue-700 duration-500 py-[6px] px-4 mt-2 relative bottom-[50%] left-[40%] rounded-md '
				>
					<span className='text-white'>CheckOut</span>
				</Link>
			</div>
		</>
	);
};

const Recommended = ({ template, templatedata }) => {
	let getTemplate = templatedata?.find((e) => e._id === template);
	return (
		<>
			<div className='px-5 py-3'>
				<div className='h-[70vh] border-2 broder-gray-200 rounded-xl'>
					<iframe
						src={`/template/${getTemplate?.template}`}
						frameBorder='0'
						className='w-full h-full blur-[1px]'
						scrolling='no'
						title='template'
					/>
				</div>
				<div className='text-center py-2'>
					<h3>{getTemplate?.name}</h3>
					<p>{getTemplate?.desc}</p>
				</div>
				<Link
					// to={`/resume/$dad`}
					to={`/resume/${getTemplate?._id}`}
					className='bg-blue-600 hover:bg-blue-700 duration-500 py-[6px] px-4 mt-2 relative bottom-[50%] left-[40%] rounded-md '
				>
					<span className='text-white'>CheckOut</span>
				</Link>
			</div>
		</>
	);
};

export default Sample;
export { Recommended };
