import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../features/AuthProvider";

const LogOutPopUp = ({ setPopupOpen }) => {
	const { setIsAuthenticated } = useContext(AuthContext);
	const apiUrl = import.meta.env.VITE_API_URL;

	const onCancel = () => {
		setPopupOpen(false);
	};

	const onLogout = async () => {
		try {
			console.log(apiUrl);
			await axios.post(`${apiUrl}/logout`, {}, { withCredentials: true });
			setIsAuthenticated(false);
			setPopupOpen(false);
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-[#273449] rounded-xl p-6 w-96 shadow-lg text-white'>
				<h2 className='text-2xl font-bold mb-2'>Confirm Logout</h2>
				<p className='text-gray-300 mb-6'>
					Are you sure you want to log out? You will need to log in
					again to access your account and chat history.
				</p>
				<div className='flex justify-end space-x-4'>
					<button
						onClick={onCancel}
						className='px-5 py-2 bg-gray-600 rounded hover:bg-gray-500 transition'
					>
						Cancel
					</button>
					<button
						onClick={onLogout}
						className='px-5 py-2 bg-red-600 rounded hover:bg-red-700 transition'
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogOutPopUp;
