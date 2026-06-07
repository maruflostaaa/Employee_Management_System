import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskNumber = ({ data }) => {
   // console.log("DATA RECEIVED:", data)

   const allTasks = data.tasks

   const taskNumbers = {
      newTask: allTasks.filter(t => t.newTask).length,
      completed: allTasks.filter(t => t.completed).length,
      active: allTasks.filter(t => t.active).length,
      failed: allTasks.filter(t => t.failed).length
   }

   return (
      <div className='flex mt-10 justify-between gap-5 screen'>
         <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
            <h2>{taskNumbers.newTask}</h2>
            <h3>New Task</h3>
         </div>

         <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
            <h2>{taskNumbers.completed}</h2>
            <h3>Completed Task</h3>
         </div>

         <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
            <h2>{taskNumbers.active}</h2>
            <h3>Accepted Task</h3>
         </div>

         <div className='rounded-xl w-[45%] px-9 py-6 bg-gray-600'>
            <h2>{taskNumbers.failed}</h2>
            <h3>Failed Task</h3>
         </div>
      </div>
   )
}


export default TaskNumber