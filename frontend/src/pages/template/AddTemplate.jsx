import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../../extra/MetaData';
import { clearError, addTemplate } from '../../actions/templateAction';
import { toast } from 'react-toastify';

const AddTemplate = () => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [file, setFile] = useState(null);

	const dispatch = useDispatch();
	const alert = toast;

	const { error, loading } = useSelector((state) => state.template);

	const uploadfile = (e) => {
		setFile(e.target.files[0]);
	};

	const addTemplatedata = (e) => {
		e.preventDefault();
		dispatch(addTemplate(name, desc, file));
		window.location.reload(false);

		alert.success('template added successfully');
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
	}, [dispatch, error, alert]);

	return (
		<>
			<MetaData title={'Add Template'} />
			<section className='container mx-auto'>
				<div className='bg-gray-50 shadow-xl p-5 lg:w-[45%] md:w-[65%] sm:w-[80%] w-full mx-auto mt-[15vh] rounded-md'>
					<h3 className='text-center underline underline-offset-8'>
						Add Template
					</h3>
					<form onSubmit={addTemplatedata}>
						{' '}
						<div className='border-b-2 border-gray-500 my-10'>
							<label htmlFor='name' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Enter Your Template Name
							</label>
							<input
								className='bg-gray-50 outline-none w-full px-6 mt-2'
								type='text'
								placeholder='Example'
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>{' '}
						<div className='border-b-2 border-gray-500 my-10'>
							<label htmlFor='Desc' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Enter Your Template Description
							</label>
							<textarea
								className='bg-gray-50 outline-none w-full px-6 mt-2'
								type='text'
								placeholder='this is template description'
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								required
							/>
						</div>{' '}
						<div className=' my-10'>
							<label htmlFor='template' className='text-sm font-quicksand'>
								<span className='text-red-600 text-bold'>* </span>
								Enter Your Template
							</label>
							<br /> <input type='file' onChange={uploadfile} required />
						</div>
						<div className='flex justify-center'>
							<button
								className={`text-white w-1/2 font-poppins font-medium px-5 py-2 rounded-full bg-blue-600 `}
								type='submit'
								disabled={loading ? true : false}
							>
								Add Template
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default AddTemplate;
