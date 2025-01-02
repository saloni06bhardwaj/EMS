import React from 'react'

const CreateTask = () => {
  return (
      <div className=" w-full p-7">
                <form action="" className="flex flex-wrap w-full items-start justify-between">

                    <div className='w-1/2 flex flex-col gap-3 '>
                        <div className=" flex flex-col gap-3 ">
                            <h3>Task Title</h3>
                            <input
                                type="text"
                                id="taskTitle"
                                name="taskTitle"
                                placeholder="Enter task title"
                                className="p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input type="date" name="dob" id="" className='p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input type="text" placeholder='enter employee name' className='p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        </div>
                    </div>


                    <div className='w-2/5 flex flex-col items-start gap-5'>
                        <label className="text-sm font-medium text--700 mb-0.5" htmlFor="taskDescription">Task Description</label>
                        <textarea
                            rows="5"
                            cols="30"
                             id="taskDescription"
                            name="taskDescription"
                            placeholder="Enter task description"
                            className="p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
    
  )
}

export default CreateTask
