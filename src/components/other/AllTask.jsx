import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData, setUserData] = useContext(AuthContext)
   return (
      <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
         <div className='bg-red-600 mb-2  py-2 px-4 flex justify-between rounded '>
            <h2 className='text-lg font-medium w-1/5 bg-red-500'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 bg-red-500'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 bg-red-500'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 bg-red-500'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 bg-red-500'>Failed</h5>
         </div>

         <div className=''>
            {userData.employees.map((elem, idx) => {
               const newTask = elem.tasks.filter(t => t.newTask).length
               const active = elem.tasks.filter(t => t.active).length
               const completed = elem.tasks.filter(t => t.completed).length
               const failed = elem.tasks.filter(t => t.failed).length
               return (
                  <div key={idx} className='bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                     <h2 className='w-1/5'>{elem.firstName}</h2>
                     <h3 className='w-1/5 text-blue-600'>{newTask}</h3>
                     <h5 className='w-1/5 text-yellow-400'>{active}</h5>
                     <h5 className='w-1/5 text-white'>{completed}</h5>
                     <h5 className='w-1/5 text-red-600'>{failed}</h5>
                  </div>
               )
            })}
         </div>
      </div>
   )
}


export default AllTask