import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../features/AuthProvider";

const Login = () => {
	const apiUrl = import.meta.env.VITE_API_URL;

	const { setIsAuthenticated } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await axios.post(`${apiUrl}/api/auth/login`, data, {
				withCredentials: true,
			});

			setIsAuthenticated(true);

			reset();
		} catch (error) {
			console.error(
				"Login failed:",
				error.response?.data || error.message,
			);
			alert("Login Failed!");
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-[#273449] p-4'>
			<div className='max-w-md w-full bg-[#1f2a3a] rounded-xl shadow-xl p-8 space-y-6 text-white'>
				<div className='flex flex-col items-center'>
					<h1 className='text-4xl font-bold mb-1'>Nova-AI</h1>
					<p className='text-gray-300'>
						Welcome back! Please sign in
					</p>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mt-4 space-y-4'
				>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-300'
						>
							Email address
						</label>
						<input
							id='email'
							name='email'
							type='email'
							required
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
									message: "Email is not valid",
								},
							})}
							className='mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-[#273449] text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							placeholder='Email address'
						/>
						{errors.email && (
							<span className='text-red-500 text-sm'>
								{errors.email.message}
							</span>
						)}
					</div>

					<div>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-gray-300'
						>
							Password
						</label>
						<input
							id='password'
							name='password'
							type='password'
							required
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message:
										"Password must be at least 6 characters",
								},
								maxLength: {
									value: 20,
									message:
										"Password cannot exceed 20 characters",
								},
							})}
							className='mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-[#273449] text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
							placeholder='Password'
						/>
						{errors.password && (
							<span className='text-red-500 text-sm'>
								{errors.password.message}
							</span>
						)}
					</div>

					<div>
						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition'
						>
							Sign In
						</button>
					</div>
				</form>

				<div className='flex justify-between text-sm text-gray-400'>
					<Link to='/forgot-password' className='hover:underline'>
						Forgot password?
					</Link>

					<Link to='/register' className='hover:underline'>
						Create account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
