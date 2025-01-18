import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  const handleLogin = (email, password) => {
    // amazonq-ignore-next-line
    if (email == 'admin@me.com' && password == '123') {

      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));


    }
    // amazonq-ignore-next-line
    else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password);
      if (employee) {
        setUser('employee');
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
        setLoggedInUserData(employee);
      }


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
  }, [user]);


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashBoard changeUser={setUser} data={loggedInUserData} /> : null)}

    </div>
  )
}

export default App

