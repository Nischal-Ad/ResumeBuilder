import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, forgetPassword } from '../actions/userAction';
import { toast } from 'react-toastify';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import MetaData from '../extra/MetaData';

const ForgetPassowrd = () => {
	const [email, setEmail] = useState('');

	const nevigate = useNavigate();

	const alert = toast;

	const dispatch = useDispatch();

	const { loading, error, message } = useSelector(
		(state) => state.forgetpassword
	);

	const resetPassword = (e) => {
		e.preventDefault();
		dispatch(forgetPassword(email));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		if (message) {
			alert.success(message);
			nevigate('/');
		}
	}, [dispatch, error, alert, message, nevigate]);

	return (
		<>
			<MetaData title={'Forget Password'} />
			<section className="container mx-auto">
				<div className="ml-5 mt-10 md:mb-0 mb-6">
					<Link className="" to="/">
						<AiOutlineArrowLeft className="text-5xl bg-gray-50 p-2 rounded-full duration-500 hover:scale-110" />
					</Link>
				</div>
				<div className="bg-gray-50 shadow-xl p-5 lg:w-[45%] md:w-[65%] sm:w-[80%] w-full mx-auto mt-[20vh] rounded-md">
					<h3 className="text-center underline underline-offset-8">
						Reset Password
					</h3>
					<form onSubmit={resetPassword}>
						<div className="border-b-2 border-gray-500 my-10">
							<label htmlFor="Email" className="text-sm font-quicksand">
								<span className="text-red-600 text-bold">* </span>
								Enter Your Email
							</label>
							<input
								className="bg-gray-50 outline-none w-full px-6 mt-2"
								type="email"
								placeholder="abc@gmail.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="flex justify-center">
							<button
								className={`text-white w-1/2 font-poppins font-medium px-5 py-2 rounded-full bg-orange-600 `}
								type="submit"
								disabled={loading ? true : false}
							>
								{loading ? 'loading...' : 'Reset Passowrd'}
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default ForgetPassowrd;
