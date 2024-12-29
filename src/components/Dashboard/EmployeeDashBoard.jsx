import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = () => {
  return (
    <div className='h-screen flex flex-col bg-[#565454]'>
      <Header />
      <main className='flex-grow'>
      <TaskListNumber />
      </main>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashBoard
