import { X, Plus, User, Info, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogOutPopUp from "./LogOutPopUp";
import Profile from "./Profile";
import { useState } from "react";
const Sidebar = (props) => {
	const { isOpen, setIsOpen, onNewChat } = props;
  const [PopupOpen, setPopupOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* Backdrop (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
		flex flex-col bg-[#1e2939] max-h-screen text-white p-4 
		w-64 fixed z-10 top-0 left-0 text-xl overflow-y-auto
		${isOpen ? "flex" : "hidden"} 
		md:flex md:relative md:w-[15vw] md:fixed-none
	`}
      >
        <div className="flex flex-col gap-4 flex-shrink-0">
          <X
            onClick={() => {
              setIsOpen(false);
            }}
            className="md:hidden self-end cursor-pointer hover:opacity-80 transition"
            size={24}
          />
          <button
            onClick={() => {
              onNewChat();
            }}
            className="px-3 py-3 rounded hover:bg-[#2a3a4a] transition flex items-center gap-2 font-semibold"
          >
            <Plus size={20} />
            New Chat
          </button>
        </div>

        <div className="flex flex-col items-start gap-3 mt-6 flex-shrink-0">
          <button 
            onClick={() => setProfileOpen(true)}
            className="px-3 py-2 rounded hover:bg-[#2a3a4a] transition w-full text-left flex items-center gap-2 hover:text-blue-400"
          >
            <User size={18} />
            Profile
          </button>

          {/* <button onClick={() => navigate("/setting")} className='px-3 py-2 rounded hover:bg-[#2a3a4a] transition w-full text-left flex items-center gap-2'>
						<Settings size={18} />
						Setting
					</button> */}
          <button
            onClick={() => navigate("/about")}
            className="px-3 py-2 rounded hover:bg-[#2a3a4a] transition w-full text-left flex items-center gap-2 hover:text-blue-400"
          >
            <Info size={18} />
            About Nova-ai
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col gap-3 flex-shrink-0">
          <button
            onClick={() => setPopupOpen(true)}
            className="px-3 py-2 rounded hover:bg-red-900 transition w-full text-left flex items-center gap-2 hover:text-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>
          {PopupOpen && <LogOutPopUp setPopupOpen={setPopupOpen} />}
        </div>
      </div>
      <Profile isOpen={profileOpen} setIsOpen={setProfileOpen} />
    </>
  );
};

export default Sidebar;
