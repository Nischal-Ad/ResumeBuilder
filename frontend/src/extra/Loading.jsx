import React from 'react';
import { ClassicSpinner } from 'react-spinners-kit';

const Loading = () => {
	return (
		<>
			<section className="container mx-auto h-screen flex justify-center items-center">
				<ClassicSpinner size={30} color="#ADADAD" />
			</section>
		</>
	);
};

export default Loading;
