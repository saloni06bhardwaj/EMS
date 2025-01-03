import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  //  useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage();
  //  },)
  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      
    }
    else if (email == 'user@me.com' && password == '123') {
      setUser('employee');
      
    }
    else {
      alert('Invalid credentials');
    }
  }

  useEffect(() => {
    if (user) {
      console.log(user); // This will log the updated user state
    }
  }, [user]);

const data=useContext(AuthContext)
console.log(data);


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user ==='admin' && <AdminDashboard/> }
      {user ==='employee' && <EmployeeDashBoard/> }

    </div>
  )
}

export default App

