import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { id: 1, name: 'Dashboard', icon: '📊', path: '/' },
    { id: 2, name: 'Analytics', icon: '📈', path: '/analytics' },
    { id: 3, name: 'Users', icon: '👥', path: '/users' },
    { id: 4, name: 'Products', icon: '🛍️', path: '/products' },
    { id: 5, name: 'Orders', icon: '📦', path: '/orders' },
    { id: 6, name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar - positioned below header and only covers on mobile */}
      <nav className={`
        w-64 bg-white text-black h-[calc(100vh-4rem)] fixed left-0 top-16 z-30
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand */}
        <div className="p-6 border-b border-gray-300 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Admin Panel</h2>
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>
        
        {/* Navigation Menu */}
        <ul className="p-4 space-y-2">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-black hover:text-white'
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-300">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">System Online</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;