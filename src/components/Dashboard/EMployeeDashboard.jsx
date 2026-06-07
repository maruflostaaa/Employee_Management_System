import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const EMployeeDashboard = (props) => {
  const [userData] = useContext(AuthContext)
  const employee = userData.employees.find(
    e => e.email === props.data.email
  )
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EMployeeDashboard