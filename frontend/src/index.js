import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
	position: 'top-center',
	autoClose: 1000,
	hideProgressBar: false,
	closeOnClick: true,
	newestOnTop: false,
	pauseOnHover: false,
	draggable: false,
	rtl: false,
	theme: 'colored',
	progress: undefined,
};

root.render(
	<Provider store={store}>
		<App />
		<ToastContainer transition={Zoom} {...options} />
	</Provider>
);
