import React from 'react'

const FailedTask = ({ data }) => {
   return (
      <div className='w-[300px] h-[260px] shrink-0 bg-red-400 rounded-xl p-5 shadow-md flex flex-col justify-between'>

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
            <span className='bg-red-700 text-white px-3 py-1 rounded-full text-xs'>
               Failed ✕
            </span>
         </div>

      </div>
   )
}

export default FailedTask