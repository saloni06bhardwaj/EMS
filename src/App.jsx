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
  const authData = useContext(AuthContext)
  
  useEffect(() => {
    if (authData){
      const loggedInUser = localStorage.getItem('loggedInUser');
    }
  }, [authData])
  

  const handleLogin = (email, password) => {
    // amazonq-ignore-next-line
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');

    }
    // amazonq-ignore-next-line
    else if (authData && authData.employees.find((e)=> email == e.email && e.password == password) ) {
      setUser('employee');

    }
    else {
      // amazonq-ignore-next-line
      alert('Invalid credentials');
    }
  }

  useEffect(() => {
    if (user) {
      console.log(user); // This will log the updated user state
    }
  }, []);


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashBoard />}

    </div>
  )
}

export default App

