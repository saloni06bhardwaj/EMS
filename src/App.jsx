import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  
 useEffect(() => {
  setLocalStorage()
  getLocalStorage();
 },)
 
  
  
  return (
    <div>
      <Login />
      {/* <EmployeeDashBoard /> */}
     {/* <AdminDashboard /> */}

    </div>
  )
}

export default App

