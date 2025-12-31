import { useState } from "react";
import Sidebar from "../component/Sidebar";
import ChatInterface from "../component/ChatInterface";

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className='flex h-screen overflow-hidden'>
			<Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

			<div className='flex-1 flex flex-col'>
				{!isSidebarOpen && (
					<button
						className='absolute top-3 left-3 mb-4 md:hidden
	           p-2 bg-indigo-600 text-white rounded-lg shadow
	           hover:bg-indigo-700 z-10'
						onClick={() => setIsSidebarOpen(true)}
					>
						☰
					</button>
				)}

				<ChatInterface />
			</div>
		</div>
	);
};

export default Home;
