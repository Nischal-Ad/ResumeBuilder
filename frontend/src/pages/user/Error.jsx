import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import MetaData from '../../extra/MetaData';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<>
			<MetaData title={'Error'} />
			<div className="container mx-auto">
				<div className="flex flex-col text-center mt-[30vh]">
					<h1 className="mb-10">
						404 <br />
						Page Not Found
					</h1>
					<p>
						We’re sorry, the page you have looked for does not exist in our
						website! Maybe go to our home page or try something else ?
					</p>
					<Link className="mt-10 flex justify-center" to="/">
						<button className=" flex items-center bg-blue-400 rounded-lg px-2 py-2 text-white">
							Go Back To Home &nbsp; <BsFillArrowRightSquareFill />
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Error;
