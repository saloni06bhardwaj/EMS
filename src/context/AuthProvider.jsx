import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export  const AuthContext = createContext ()
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState([])
    setLocalStorage();
    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        console.log("Employees:", employees);
        console.log("Admin:", admin);
        setUserData({ employees, admin });
      }, []);

  return (
    <div>
      <AuthContext.Provider value ={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
