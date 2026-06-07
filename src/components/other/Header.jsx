import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

   const [userName, setUserName] = useState('')

   const logOutUser = () => {
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      // window.location.reload()
   }

   return (
      <div className='items-end flex justify-between'>
         <h1 className='text-2xl font-medium'>
            Hello
            <br />
            <span className='text-3xl font-semibold'>
               {props?.firstName || 'Employee'} 🤗
            </span>
         </h1>

         <button 
            onClick={logOutUser}
            className='bg-red-500 text-white py-2 rounded-3xl px-5 text-lg font-medium'>
            Log Out
         </button>
      </div>
   )
}

export default Header