import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../features/AuthProvider";
import { LogOut, AlertCircle, X } from "lucide-react";

const LogOutPopUp = ({ setPopupOpen }) => {
	const { setIsAuthenticated } = useContext(AuthContext);
	const apiUrl = import.meta.env.VITE_API_URL;

	const onCancel = () => {
		setPopupOpen(false);
	};

	const onLogout = async () => {
		try {
			console.log(apiUrl);
			await axios.post(`${apiUrl}/api/auth/logout`,  { withCredentials: true });
			setIsAuthenticated(false);
			setPopupOpen(false);
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<div className='fixed inset-0 bg-black/20 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
			<div className='bg-gradient-to-br from-[#273449] to-[#1e2939] rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl text-white border border-gray-700'>
				{/* Close Button */}
				<button
					onClick={onCancel}
					className='absolute top-4 right-4 p-2 hover:bg-[#2a3a4a] rounded-lg transition duration-200'
				>
					<X size={20} className='text-gray-400 hover:text-white' />
				</button>

				{/* Header with Icon */}
				<div className='flex items-center gap-3 mb-4'>
					<div className='bg-red-500/20 p-3 rounded-lg'>
						<AlertCircle size={24} className='text-red-500' />
					</div>
					<h2 className='text-xl sm:text-2xl font-bold'>Confirm Logout</h2>
				</div>

				{/* Content */}
				<p className='text-gray-300 text-sm sm:text-base mb-8 leading-relaxed'>
					Are you sure you want to log out? You will need to log in again to access your account and chat history.
				</p>

				{/* Action Buttons */}
				<div className='flex gap-3 sm:gap-4'>
					<button
						onClick={onCancel}
						className='flex-1 px-4 py-2.5 sm:py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-200 font-medium text-sm sm:text-base'
					>
						Cancel
					</button>
					<button
						onClick={onLogout}
						className='flex-1 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-lg transition duration-200 font-medium flex items-center justify-center gap-2 text-sm sm:text-base'
					>
						<LogOut size={18} />
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogOutPopUp;
