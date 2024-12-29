import React from 'react'

const TaskListNumber = () => {
  return (
    <div className=" h-[40vh] bg-[#565454] flex gap-10 px-12 items-center justify-center ">
      <div className="card bg-blue-400 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>

        </div>
      </div>
      <div className="card bg-green-300 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>Completed Task</p>

        </div>
      </div>
      <div className="card bg-yellow-300 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>Accepted Task</p>

        </div>
      </div>
      <div className="card bg-red-400 w-96 shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>Failed Task</p>

        </div>
      </div>
    </div>
  )
}

export default TaskListNumber