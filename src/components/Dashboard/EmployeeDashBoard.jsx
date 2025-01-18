import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = ({data}) => {
  console.log(data)
  return (
    <div className='h-screen flex flex-col bg-gray-700'>
      <Header data={data} />
      <main className='flex-grow'>
      <TaskListNumber data={data} />
      </main>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashBoard
