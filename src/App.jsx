import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/admin/Dashboard'
import Main from './layout/Main'
import Analytics from './pages/admin/Analytics'
import Users from './pages/admin/Users'
import Products from './pages/admin/Products'
import Orders from './pages/admin/Orders'
import Settings from './pages/admin/Settings'





const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Dashboard/>} />
          <Route path="analytics" element={<Analytics/>} />
          <Route path="users" element={<Users/>} />
          <Route path="products" element={<Products/>}/>
          <Route path="orders" element={<Orders/>} />
          <Route path="settings" element={<Settings/>} />
      </Route>
    </Routes>
  )
}

export default App
