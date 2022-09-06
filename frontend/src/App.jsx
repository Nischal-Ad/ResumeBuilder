import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { loadAllUser } from './actions/userAction';

import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import { getAllResume } from './actions/resumeAction';
import { loadAllTemplate } from './actions/templateAction';
import { getAllRecommendation } from './actions/recommendedAction';
import Auth from './pages/Auth';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Landing from './pages/Landing';
import Home from './pages/user/Home';
import FAQ from './pages/user/Help';
import Profile from './pages/user/Profile';
import {
	ProtectedRoutes,
	ProtectedRouteUser,
	ProtectedRouteAdmin,
} from './ProtectedRoutes';
import Error from './pages/user/Error';
import ForgetPassowrd from './pages/ForgetPassowrd';
import ChangePassword from './pages/user/ChangePassword';
// import Resume from './pages/user/Resume';
import AdminHome from './pages/admin/AdminHome';
import Resumes from './pages/admin/Resumes';
import Users from './pages/admin/Users';
import Template from './pages/template/template';
import Page from './pages/test/alltemplate';
import AddTemplate from './pages/template/AddTemplate';
import AddAdmin from './pages/template/AddAdmin';
import MyResume from './pages/user/resumes/MyResume';
import EditResume from './pages/user/resumes/EditResume';

const App = () => {
	const { isAuthenticated, role } = useSelector((state) => state.user);

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Nunito', 'Quicksand', 'Poppins'],
			},
		});
		let search = '';
		store.dispatch(getAllRecommendation());
		store.dispatch(loadUser());
		store.dispatch(getAllResume());
		store.dispatch(loadAllUser());
		store.dispatch(loadAllTemplate(search));
	}, []);

	return (
		<BrowserRouter>
			{isAuthenticated && <Navbar />}
			<Routes>
				<Route
					path='/'
					element={
						isAuthenticated ? (
							<>
								{role === 'admin' ? (
									<>
										<AdminHome />
									</>
								) : (
									<>
										<Home />
									</>
								)}
							</>
						) : (
							<Landing />
						)
					}
				/>

				<Route path='/auth' element={<Auth />} />
				<Route path='/password/forget' element={<ForgetPassowrd />} />

				<Route
					element={
						<ProtectedRouteUser isAuthenticated={isAuthenticated} role={role} />
					}
				>
					{/* this is test route  */}
					<Route path='/resume' element={<Page />} />
					{/* test route end here */}

					<Route path='/help' element={<FAQ />} />

					<Route path='/resume/:id' element={<Template />} />
					<Route path='/myresume/:id' element={<MyResume />} />
					<Route path='/myresumeedit/:id' element={<EditResume />} />
				</Route>

				<Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
					<Route path='/profile' element={<Profile />} />
					<Route path='/change/password' element={<ChangePassword />} />
				</Route>

				<Route
					element={
						<ProtectedRouteAdmin
							isAuthenticated={isAuthenticated}
							role={role}
						/>
					}
				>
					<Route path='/users' element={<Users />} />
					<Route path='/addtemplate' element={<AddTemplate />} />
					<Route path='/addadmin' element={<AddAdmin />} />
					<Route path='/resumes' element={<Resumes />} />
				</Route>

				{/* 404 page error */}
				<Route path='*' element={<Error />} />
			</Routes>
			{isAuthenticated && <Footer />}
		</BrowserRouter>
	);
};

export default App;
