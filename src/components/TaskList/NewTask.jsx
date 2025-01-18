import React from 'react'

const NewTask = ({data}) => {
    return (

        <>
            <div className="card bg-green-300 w-[30%]  gap-1 shadow-xl">
                <div className='flex items-start justify-between'>
                    <h3 className='w-fit bg-pink-600 px-2 py-2 m-2 font-semibold rounded-xl text-black '>High</h3>
                    <h4 className='px-2 py-2 font-semibold text-lg text-black' >{data.taskDate}</h4>
                </div>
                <div className="card-body text-black">
                    <h2 className=" font-bold text-2xl">2</h2>
                    <p className='font-medium'>{data.taskDescription}</p>
                </div>
           
            <div className='mt-4 flex justify-center items-center'>
                <button className='bg-green-500 py-1 px-2 m-2 text-white text-sm rounded-lg'>Accept Task</button>
            </div>
            </div>
        </>

    )
}

export default NewTask;
