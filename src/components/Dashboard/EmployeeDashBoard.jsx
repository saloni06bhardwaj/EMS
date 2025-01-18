import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = (props) => {
  
  return (
    <div className='h-screen flex flex-col bg-gray-700'>
      <Header changeUser={props.changeUser} data={props.data} />
      <main className='flex-grow'>
      <TaskListNumber data={props.data} />
      </main>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashBoard
