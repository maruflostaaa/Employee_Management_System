import React, { useState } from 'react'

const Login = ({handleLogin}) => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const submitHandler = (e) => {
      e.preventDefault()
      handleLogin(email,password)
      setEmail('')
      setPassword('')
   }

   
   
   return (
      <div className='flex items-center justify-center h-screen w-screen  '>
         <div className='border-2 border-emerald-600 p-20'>
            <form
               onSubmit={
                  (e) => {
                     submitHandler(e)
                  }
               }
               className='flex flex-col rounded-xl items-center justify-center'>
                  
               <input required
                  value={email}
                  onChange={
                     (e) => {
                        setEmail(e.target.value)
                     }
                  }
                  className='text-black py-3 px-5 outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full placeholder:text-gray-400' type="email"
                  placeholder='Enter Your Email'
               />
               
               <input required
                  value={password}
                  onChange={
                     (e) => {
                        setPassword(e.target.value)
                     }
                  }
                  className='text-black py-3 px-5 outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password"
                  placeholder='Enter Password'
               />

               <button required
                  className='text-white py-3 px-25 outline-none border-none border-2 bg-emerald-600 text-xl rounded-full placeholder:text-gray-100 mt-3'
               >Log In
               </button>
            </form>
         </div>
      </div>
   )
}

export default Login