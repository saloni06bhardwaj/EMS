import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const authData = useContext(AuthContext);

    return (


        <div className='flex flex-col mt-5 h-48 '>
            <div className='bg-blue-300 py-3 px-5 m-3 text-black flex justify-between rounded-md  '>
                <h2 className='w-1/6 text-lg font-medium'>Employee Name</h2>
                <h2 className='w-1/6 text-lg font-medium' >New Task</h2>
                <h3 className='w-1/6 text-lg font-medium'>Active Task</h3>
                <h5 className='w-1/6 text-lg font-medium'>Completed Task</h5>
                <h5 className='w-1/6 text-lg font-medium '>Failed</h5>
            </div>
            <div className='h-[80%]'>
                {authData.employees.map(function (elem,idx) {
                    return (
                        <div key={idx} className='border-2 border-emerald-800 py-3 px-5 m-3  flex justify-between rounded-md  '>
                            <h2 className='w-1/6 text-lg font-medium text-white'>{elem.firstName}</h2>
                            <h2 className='w-1/6 text-lg font-medium text-blue-300' > {elem.taskCount.newTask}</h2>
                            <h3 className='w-1/6 text-lg font-medium text-yellow-300'>{elem.taskCount.active}</h3>
                            <h5 className='w-1/6 text-lg font-medium text-green-300'>{elem.taskCount.completed}</h5>
                            <h5 className='w-1/6 text-lg font-medium text-red-300'>{elem.taskCount.failed}</h5>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AllTasks
