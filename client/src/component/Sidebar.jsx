import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogOutPopUp from "./LogOutPopUp";
import { useState } from "react";
const Sidebar = (props) => {
	const { isOpen, setIsOpen } = props;
	const [PopupOpen, setPopupOpen] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			{/* Backdrop (mobile only) */}
			{isOpen && (
				<div
					className='fixed inset-0 z-10 md:hidden'
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<div
				className={`
		flex flex-col justify-between bg-[#1e2939] h-[100vh] text-white p-4 
		w-[50vw] absolute z-10 top-0 left-0 text-xl
		${isOpen ? "flex" : "hidden"} 
		md:flex md:relative md:w-[15vw]
	`}
			>
				<div className='flex flex-col gap-4 '>
					<X
						onClick={() => {
							setIsOpen(false);
						}}
						className='md:hidden self-end cursor-pointer'
					/>
					<button
						onClick={() => {
							setIsOpen(false);
						}}
					>
						new-chat
					</button>
				</div>

				<div className='flex flex-col items-start md:gap-4 gap-2  mb-4 '>
					<button>Profile</button>

					<button onClick={() => navigate("/setting")}>
						Setting
					</button>
					<button onClick={() => navigate("/about")}>About us</button>
					<button onClick={() => setPopupOpen(true)}>Logout</button>
					{PopupOpen && <LogOutPopUp setPopupOpen={setPopupOpen} />}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
