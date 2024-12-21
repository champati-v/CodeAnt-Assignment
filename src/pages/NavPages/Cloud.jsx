import React from 'react'
import SideBar from '../../components/SideBar'
import RepositoryPage from '../RepositoryPage'
import MobileSidebar from '../../components/MobileSidebar'

const Cloud = () => {
  return (
    <>
    <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Sidebar */}
      <div className='flex lg:hidden overflow-hidden'>
        <MobileSidebar/>
      </div>
      <div className="hidden lg:flex lg:w-64 lg:h-full">
        <SideBar />
      </div>
      {/* Repository Page */}
      <div className="flex-1 h-full overflow-y-auto">
        <RepositoryPage />
      </div>
    </div>
    </>
  )
}

export default Cloud