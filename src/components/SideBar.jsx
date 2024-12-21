import React from "react";
import logo from "../assets/logo.png";
import { ChevronDown, PhoneIcon, LogOutIcon } from "lucide-react";
import Menu from "./MenuItem";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden bg-white h-full w-64 lg:flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <Link to="/">
        <div className="logo-container flex space-x-4 items-center pl-8 pt-8">
          <img src={logo} alt="Logo" />
          <h1 className="text-xl font-light">CodeAnt AI</h1>
        </div>
        </Link>

        <div className="flex flex-col items-center">
          <div className="profile mt-4">
            <button className="flex justify-between bg-white border border-slate-300 rounded-md px-2 p-1 w-48">
              UserName <ChevronDown />
            </button>
          </div>

          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full px-8 pb-4">
        <button className="w-full p-2 flex items-center gap-2 rounded-md">
          <PhoneIcon /> Support
        </button>

        <Link to="/"><button className="w-full p-2 flex items-center gap-2 rounded-md mt-2">
          <LogOutIcon /> Logout
        </button></Link>
      </div>
    </div>
  );
};

export default SideBar;
