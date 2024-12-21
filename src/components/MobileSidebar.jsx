import React, { useState } from "react";
import MenuItem from "./MenuItem";
import logo from "../assets/logo.png";
import { MenuIcon, X, PhoneIcon, LogOutIcon } from "lucide-react";

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full flex justify-between items-center h-16 p-4 overflow-hidden border-b border-gray-300">
       <div className="flex gap-3 items-center">
            <img src={logo} alt="logo" />
            <h1 className="text-lg">CodeAnt AI</h1>
       </div>
       <MenuIcon onClick={toggleSidebar} />
      {/* Sidebar and Overlay */}
      {isSidebarOpen && (
        <div>
          {/* Sidebar */}
          <div className="fixed flex flex-col justify-between top-0 right-0 w-64 h-full bg-white shadow-md z-50 p-3 cursor-pointer">
            <div>
            <div className="flex justify-between items-center border-b border-gray-300 p-2">
                <div className="flex gap-3 items-center">
                    <img src={logo} alt="logo" />
                    <h1 className="text-lg">CodeAnt AI</h1>
                </div>
                <X onClick={toggleSidebar}/>
            </div> 
            <MenuItem/>
            </div>

            {/* Footer Section */}
            <div className="w-full pb-4">
                <button className="w-full p-2 flex items-center gap-2 rounded-md">
                    <PhoneIcon /> Support
                </button>

                <button className="w-full p-2 flex items-center gap-2 rounded-md mt-2">
                    <LogOutIcon /> Logout
                </button>
            </div>
            
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
