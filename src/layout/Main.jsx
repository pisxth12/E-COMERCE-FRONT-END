import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/admin/Header'
import SideBar from '../components/admin/SideBar'

const Main = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header at the top */}
      <Header isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      {/* Main content area with sidebar and dashboard content */}
      <div className="flex flex-1">
        <SideBar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        
        {/* Scrollable Dashboard Content with proper margin */}
        <main className="flex-1 overflow-auto lg:ml-64 ">

          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main