import React from "react";
import menuItems from "../data/constants";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {menuItems.map((item, index) => (
        <div key={index} className="mt-4 flex flex-col">
          <Link to={item.href}>
            <button
              className={`w-52 p-2
                ${pathname === item.href ? "bg-blue-500 text-white" : "text-gray-600"} 
                flex items-center justify-start space-x-2 rounded-md`}
            >
              {<item.icon />}
              <span>{item.title}</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
