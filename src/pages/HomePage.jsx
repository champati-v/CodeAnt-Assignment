import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import logo_large from '../assets/logo-large.png'

const HomePage = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex justify-center gap-2 items-center pb-2 border-b border-gray-300'> 
            <img src={logo}  alt="logo" />
            <h1 className='text-2xl font-semibold'>CodeAnt AI</h1>
        </div>
        <div className='flex flex-col items-center p-4'>
            <p className='text-gray-500'>Select The Page you want to visit</p>
            <div className='flex gap-2 p-2'>
                <Link to="/repo"><button className='px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'>Repository Page</button></Link>
                <Link to="/login"><button className='px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'>Login Page</button></Link>
            </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={logo_large} className='w-52 lg:w-80' alt="logo-large"/>
        </div>
    </div>
  )
}

export default HomePage