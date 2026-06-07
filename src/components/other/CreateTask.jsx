import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

   const [userData, setUserData] = useContext(AuthContext)

   const [taskTitle, setTaskTitle] = useState('')
   const [taskDescription, setTaskDescription] = useState('')
   const [taskDate, setTaskDate] = useState('')
   const [asignInfo, setAsignInfo] = useState('')
   const [category, setCategory] = useState('')

   const { employees } = userData
   // const [newtask, setNewTask] = useState({})

   const submitHandler = (e) => {
      e.preventDefault()

      const taskObj = {
         id: crypto.randomUUID(),
         taskTitle,
         taskDescription,
         taskDate,
         category,
         active: false,
         newTask: true,
         completed: false,
         failed: false
      }

      const updatedEmployees = employees.map((emp) => {
         if (asignInfo.trim().toLowerCase() === emp.firstName.toLowerCase()) {
            return {
               ...emp,
               tasks: [...emp.tasks, taskObj]
            }
         }
         return emp
      })

      const allTasks = userData.employees.flatMap(emp => emp.tasks)

      const taskNumbers = {
         newTask: allTasks.filter(t => t.newTask).length,
         active: allTasks.filter(t => t.active).length,
         completed: allTasks.filter(t => t.completed).length,
         failed: allTasks.filter(t => t.failed).length
      }

      setUserData({
         ...userData,
         employees: updatedEmployees,
         taskNumbers
      })
      localStorage.setItem("employees", JSON.stringify(updatedEmployees))

      setTaskTitle('')
      setTaskDescription('')
      setTaskDate('')
      setAsignInfo('')
      setCategory('')
   }

   return (
      <div className='mt-10'>
         <form onSubmit={(e) => {
            submitHandler(e)
         }}
            className='flex flex-wrap w-full bg-[#1f2937] p-8 rounded-xl border border-gray-700 items-start justify-between gap-8'
         >
            <div className='w-[48%]'>
               <div className='mb-5'>
                  <h3 className='mb-2 text-sm text-gray-300'>
                     Task Title
                  </h3>
                  <input
                     value={taskTitle}
                     onChange={(e) => {
                        setTaskTitle(e.target.value)
                     }}
                     type="text"
                     placeholder='Make a UI Design'
                     className='w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 outline-none focus:border-blue-500'
                  />
               </div>

               <div className='mb-5'>
                  <h3 className='mb-2 text-sm text-gray-300'>
                     Date
                  </h3>
                  <input
                     value={taskDate}
                     onChange={(e) => {
                        setTaskDate(e.target.value)
                     }}
                     type="date"
                     className='w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 outline-none focus:border-blue-500'
                  />
               </div>

               <div className='mb-5'>
                  <h3 className='mb-2 text-sm text-gray-300'>
                     Assigned to
                  </h3>
                  <input
                     value={asignInfo}
                     onChange={(e) => {
                        setAsignInfo(e.target.value)
                     }}
                     type="text"
                     placeholder='Employee Name'
                     className='w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 outline-none focus:border-blue-500'
                  />
               </div>

               <div>
                  <h3 className='mb-2 text-sm text-gray-300'>
                     Category
                  </h3>
                  <input
                     value={category}
                     onChange={(e) => {
                        setCategory(e.target.value)
                     }}
                     type="text"
                     placeholder='Design, Dev etc...'
                     className='w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 outline-none focus:border-blue-500'
                  />
               </div>

            </div>

            <div className='w-[48%]'>
               <h3 className='mb-2 text-sm text-gray-300'>
                  Description
               </h3>

               <textarea
                  // two way binding
                  value={taskDescription}
                  onChange={(e) => {
                     setTaskDescription(e.target.value)
                  }}
                  className='w-full h-[250px] resize-none rounded-lg bg-[#111827] border border-gray-600 p-4 outline-none focus:border-blue-500'
                  placeholder='Enter task details here...'
               ></textarea>
            </div>

            <button
               className='w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold text-lg mt-4'
            >
               Create Task
            </button>

         </form>
      </div>

   )
}

export default CreateTask

