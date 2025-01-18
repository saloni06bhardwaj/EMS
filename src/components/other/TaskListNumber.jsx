import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className=" h-[40vh] bg-gray-700 flex gap-10 px-12 items-center justify-center ">
      <div className="card bg-blue-400 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">{data.taskCount.newTask}</h2>
          <p className='font-medium'>New Task</p>

        </div>
      </div>
      <div className="card bg-green-300 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">{data.taskCount.completed}</h2>
          <p className='font-medium'>Completed Task</p>

        </div>
      </div>
      <div className="card bg-yellow-300 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">{data.taskCount.active}</h2>
          <p className='font-medium'>Accepted Task</p>

        </div>
      </div>
      <div className="card bg-red-400 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">{data.taskCount.failed}</h2>
          <p className='font-medium'>Failed Task</p>

        </div>
      </div>
    </div>
  )
}

export default TaskListNumber