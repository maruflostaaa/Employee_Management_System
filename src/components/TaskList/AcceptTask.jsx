import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AcceptTask = ({ data }) => {

   const [userData, setUserData] = useContext(AuthContext)
   const handleComplete = () => {
      const updated = userData.employees.map((emp) => {

         const updatedTasks = emp.tasks.map(task => {

            if (task.id === data.id) {
               return {
                  ...task,
                  active: false,
                  newTask: false,
                  completed: true,
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
      console.log("UPDATED EMPLOYEES:", updated);
      console.log("UPDATED TASK NUMBERS:", updated[0]?.taskNumbers);

      localStorage.setItem("employees", JSON.stringify(updated))
   }

   const handleFail = () => {
      const updated = userData.employees.map((emp) => {

         const updatedTasks = emp.tasks.map(task => {
            if (task.id === data.id) {
               return {
                  ...task,
                  active: false,
                  completed: false,
                  failed: true
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
      <div className='w-[300px] h-[260px] shrink-0 bg-violet-300 rounded-xl p-5 shadow-md flex flex-col justify-between'>

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

         <div className='flex gap-2'>
            <button
               onClick={handleComplete}
               className='flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-md transition'>
               Complete
            </button>

            <button
               onClick={handleFail}
               className='flex-1 bg-red-600 hover:bg-red-700 text-white text-sm py-2 rounded-md transition'>
               Fail
            </button>
         </div>

      </div>
   )
}

export default AcceptTask