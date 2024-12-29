import React from 'react'

const TaskList = () => {
  return (
    <div className=' bg-[#565454] flex flex-col gap-6 items-center justify-center py-2'>
      <div className="card bg-blue-400 w-[50%]  shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>

        </div>
      </div>
      <div className="card bg-blue-400 w-[50%]  shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>

        </div>
      </div>
      <div className="card bg-blue-400 w-[50%]  shadow-xl">
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>

        </div>
      </div>
    </div>
  )
}

export default TaskList
