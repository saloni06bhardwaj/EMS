import React from 'react'

const CompleteTask = () => {
    return (
        <>
            <div className="card bg-violet-400 w-[30%] gap-1 shadow-xl">
                <div className='flex items-start justify-between'>
                    <h3 className='w-fit bg-pink-600 px-2 py-2 m-2 font-semibold rounded-xl text-black '>High</h3>
                    <h4 className='px-2 py-2 font-semibold text-lg text-black' >2 Janurary 2025</h4>
                </div>
                <div className="card-body text-black">
                    <h2 className=" font-bold text-2xl">2</h2>
                    <p className='font-medium'>New Task</p>
                </div>
                <div className='mt-2 flex items-center justify-center '>
                    <button className="btn btn-primary btn-sm m-2"> Completed</button>

                </div>
            </div>
        </>
    )
}

export default CompleteTask;
