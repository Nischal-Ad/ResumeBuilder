import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRouteUser = ({ isAuthenticated, role }) => {
	const alert = toast;

	if (!isAuthenticated) {
		return <Navigate to={'/auth'} />;
	}

	if (role !== 'user') {
		alert.error('cannot access this path');
		return <Navigate to={'/'} />;
	}

	return <Outlet />;
};

const ProtectedRouteAdmin = ({ isAuthenticated, role }) => {
	const alert = toast;

	if (!isAuthenticated) {
		return <Navigate to={'/auth'} />;
	}

	if (role !== 'admin') {
		alert.error('cannot access this path');
		return <Navigate to={'/'} />;
	}

	//   if (role !== 'admin') {
	//     alert.error('cannot access this path');
	//     return <Navigate to={'/'} />;
	//   }

	return <Outlet />;
};

const ProtectedRoutes = ({ isAuthenticated }) => {
	if (!isAuthenticated) {
		return <Navigate to={'/auth'} />;
	}

	//   if (role !== 'admin') {
	//     alert.error('cannot access this path');
	//     return <Navigate to={'/'} />;
	//   }

	return <Outlet />;
};

export { ProtectedRouteAdmin, ProtectedRoutes, ProtectedRouteUser };
