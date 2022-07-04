import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Footer = () => {
	return (
		<>
			<section className="bg-gray-100 py-5 mt-auto">
				<div className="container mx-auto flex text-[#171849]">
					<Link to="/" className="flex items-center">
						<img src={logo} alt="" className="w-8" />
						<h2 className="text-xl">Resume Builder </h2>
					</Link>

					<div className="flex items-center px-2 text-lg">|</div>
					<div className=" flex items-center">
						<h4 className="font-bold">© Nischal Adhikari</h4>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
