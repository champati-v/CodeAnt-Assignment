import React from "react";
import logo from '../../assets/logo.png';
import gitlab from '../../assets/gitlab.svg'
import logo_large from '../../assets/logo-large.png'
import { PieChartIcon, ArrowUp, KeyRoundIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Left Section */}
      <div className="hidden lg:flex-1 lg:flex items-center justify-center bg-white">
        <div className="text-center p-8">

          {/* box-top  */}
          <div className="bg-white shadow-2xl shadow-black/30 p-6 py-10 rounded-3xl w-84">
            
            <div className="flex justify-between items-start gap-3 border-b border-slate-300 p-2">
              <img src={logo} alt="" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                AI to Detect & Autofix Bad Code
              </h3>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-xl">30+</h1>
                <p className="text-sm text-gray-500">Language Support</p>
              </div>
              <div>
                <h1 className="font-bold text-xl">10K+</h1>
                <p className="text-sm text-gray-500">Developers</p>
              </div>
              <div>
                <h1 className="font-bold text-xl">100K+</h1>
                <p className="text-sm text-gray-500">Hours Saved</p>
              </div>
            </div>

          </div>

          {/* bottom box */}
          <div className="bg-white shadow-2xl p-4 w-52 rounded-3xl relative left-52 bottom-6">
              <div className="flex items-center justify-between p-1">
                  <PieChartIcon className="text-purple-600 font-bold" size={45}/>
                  <div className="flex flex-col items-center">
                        <p className="text-blue-800 font-bold flex"><ArrowUp className="text-blue-800 font-bold" size={25}/> 14%</p>
                        <p className="text-sm text-gray-500">This Week</p>
                  </div>
              </div>
              <div className="flex flex-col items-start mt-2">
                <p className="text-sm text-gray-600">Issues Fixed</p>
                <p className="text-2xl font-bold text-gray-800">500K+</p>
              </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={logo_large} alt="logo-large"/>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="p-8 max-w-md lg:max-w-2xl w-full bg-white border border-gray-300 rounded-xl">
          <Link to="/">
          <div className="flex gap-2 justify-center items-center mb-6">
            <img
              src={logo}
              alt="Logo"
              className="h-12"
            />
            <h1 className="text-2xl">CodeAnt AI</h1>
          </div>
          </Link>
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
            Welcome to CodeAnt AI
          </h1>
          <div className="flex justify-center mb-6 border-b border-gray-300 pb-5">
            <Link to="/login"><button className="w-48 px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md">
              SAAS
            </button></Link>
            <button className="w-48 px-6 py-2 bg-blue-500 text-white font-medium rounded-md ml-2">
              Self Hosted
            </button>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <button className="w-2/3 lg:w-3/5 flex gap-2 items-center px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md">
              <img
                src={gitlab}
                alt="Github Icon"
                className="h-5 w-5 mr-2"
              />
              Self Hosted Gitlab
            </button>
            <button className="w-2/3 lg:w-3/5 gap-2 flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md">
              <KeyRoundIcon/>
              Sign in with SSO
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            By signing up you agree to the{" "}
            <a href="#" className="font-semibold text-black">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
