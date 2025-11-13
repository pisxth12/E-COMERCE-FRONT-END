// import React from 'react';

// const NavBar = () => {
//   const navItems = [
//     { id: 1, name: 'Dashboard', icon: '📊', active: true },
//     { id: 2, name: 'Analytics', icon: '📈', active: false },
//     { id: 3, name: 'Users', icon: '👥', active: false },
//     { id: 4, name: 'Products', icon: '🛍️', active: false },
//     { id: 5, name: 'Orders', icon: '📦', active: false },
//     { id: 6, name: 'Settings', icon: '⚙️', active: false },
//   ];

//   return (
//     <nav className="w-64 bg-slate-400 text-white h-screen fixed left-0 top-0">
//       {/* Brand */}
//       <div className="p-6 border-b border-gray-700">
//         <h2 className="text-xl font-bold text-white">Admin Panel</h2>
//       </div>
      
//       {/* Navigation Menu */}
//       <ul className="p-4 space-y-2">
//         {navItems.map(item => (
//           <li key={item.id}>
//             <a
//               href="#"
//               className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
//                 item.active 
//                   ? 'bg-blue-600 text-white' 
//                   : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span className="font-medium">{item.name}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
      
//       {/* Bottom Section */}
//       <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
//         <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
//           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//           <span className="text-sm text-gray-300">System Online</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;