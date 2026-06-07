import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
   return (
      <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full py-5 mt-10'>
         {
            data.tasks.map((elem) => {
               if (elem.active) {
                  return <AcceptTask data={elem} key={elem.id} />
               }
               if (elem.newTask) {
                  return <NewTask data={elem} key={elem.id} />
               }
               if (elem.completed) {
                  return <CompleteTask data={elem} key={elem.id} />
               }
               if (elem.failed) {
                  return <FailedTask data={elem} key={elem.id} />
               }
               return null
            })
         }

      </div>
   )
}

export default TaskList