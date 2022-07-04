import React from 'react';
import { useSelector } from 'react-redux';
import Welcome from '../landing/Welcome';
import AboutUs from '../landing/AboutUs';
import Goal from '../landing/Goal';
import Work from '../landing/Work';
import RecommendedData from './user/resumes/RecommendedData';
import Loading from '../extra/Loading';
import MetaData from '../extra/MetaData';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Landing = () => {
	const { loading } = useSelector((state) => state.user);

	return (
		<>
			<MetaData title='Welcome' />
			{loading ? (
				<Loading />
			) : (
				<>
					<Navbar />
					<Welcome />
					<AboutUs />
					<Goal />
					<RecommendedData />
					<Work />
					<Footer />
				</>
			)}
		</>
	);
};

export default Landing;
