import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data }) => {

   const [userData, setUserData] = useContext(AuthContext)

   const acceptHandler = () => {
      const updated = userData.employees.map((emp) => {

         const updatedTasks = emp.tasks.map(task => {
            if (task.id === data.id) {
               return {
                  ...task,
                  active: true,
                  newTask: false,
                  completed: false,
                  failed: false
               }
            }
            return task
         })

         const taskNumbers = {
            newTask: updatedTasks.filter(t => t.newTask).length,
            active: updatedTasks.filter(t => t.active).length,
            completed: updatedTasks.filter(t => t.completed).length,
            failed: updatedTasks.filter(t => t.failed).length
         }

         return {
            ...emp,
            tasks: updatedTasks,
            taskNumbers
         }
      })

      setUserData({
         ...userData,
         employees: updated
      })

      localStorage.setItem("employees", JSON.stringify(updated))
   }

   return (
      <div className='w-[300px] h-[260px] shrink-0 bg-blue-400 rounded-xl p-5 shadow-md flex flex-col justify-between'>

         <div className='space-y-3'>

            <div className='flex justify-between items-center'>
               <span className='text-xs bg-black/20 px-2 py-1 rounded-full'>
                  {data.category}
               </span>

               <span className='text-xs text-gray-800'>
                  {data.taskDate}
               </span>
            </div>

            <h2 className='text-xl font-bold'>
               {data.taskTitle}
            </h2>

            <p className='text-sm text-gray-800 line-clamp-3'>
               {data.taskDescription}
            </p>
         </div>

         <div>
            <button
               onClick={acceptHandler}
               className='w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md transition'>
               Accept Task
            </button>
         </div>

      </div>
   )
}

export default NewTask