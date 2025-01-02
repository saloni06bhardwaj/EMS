import React from 'react'

const TaskList = () => {
  return (
    <div className=' bg-[#565454] flex flex-wrap gap-3 items-center justify-center py-2'>
      <div className="card bg-pink-400 w-[30%] gap-1 shadow-xl">
        <div className='flex items-start justify-between'>
        <h3 className='w-fit bg-pink-600 px-2 py-2 m-2 font-semibold rounded-xl '>High</h3>
        <h4 className='px-2 py-2 font-semibold text-lg text-black' >2 Janurary 2025</h4>
        </div>
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>
       </div>
      </div>
      <div className="card bg-rose-400 w-[30%] gap-1 shadow-xl">
        <div className='flex items-start justify-between'>
        <h3 className='w-fit bg-pink-600 px-2 py-2 m-2 font-semibold rounded-xl '>High</h3>
        <h4 className='px-2 py-2 font-semibold text-lg text-black' >2 Janurary 2025</h4>
        </div>
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>
       </div>
      </div>
      <div className="card bg-violet-400 w-[30%] gap-1 shadow-xl">
        <div className='flex items-start justify-between'>
        <h3 className='w-fit bg-pink-600 px-2 py-2 m-2 font-semibold rounded-xl '>High</h3>
        <h4 className='px-2 py-2 font-semibold text-lg text-black' >2 Janurary 2025</h4>
        </div>
        <div className="card-body text-black">
          <h2 className=" font-bold text-2xl">2</h2>
          <p className='font-medium'>New Task</p>
       </div>
      </div>

    </div>
  )
}

export default TaskList
