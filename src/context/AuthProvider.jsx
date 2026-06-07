import React, { createContext } from 'react'
import { useState } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/LocalStorage'
import { useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

   const [userData, setUserData] = useState({
      employees: [],
      admin: []
   })
   // localStorage.clear();

   useEffect(() => {
      setLocalStorage();
      const { employees, admin } = getLocalStorage()
      setUserData({
         employees,
         admin
      })
   }, [])


   return (
      <div>
         <AuthContext.Provider value={[userData, setUserData]}>
            {children}
         </AuthContext.Provider>
      </div>
   )
}

export default AuthProvider