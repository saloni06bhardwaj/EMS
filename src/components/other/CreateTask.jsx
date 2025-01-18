import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [task, setTask] = useState('')



    const submitHandler = (e) => {
        e.preventDefault();
    
        const newTask = {
            taskTitle,
            taskDate,
            taskDescription,
            category,
            assignTo,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };
    
        setTask(newTask);
    
        // Log the object directly
        console.log("Task created:", newTask);
    
    };
    
    return (
        <div className=" w-full p-7">
            <form action="" onSubmit={(e) => {
                submitHandler(e)
            }}
                className="flex flex-wrap w-full items-start justify-between">

                <div className='w-1/2 flex flex-col gap-1 '>
                    <div className=" flex flex-col gap-3 ">
                        <h3>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            type="text"
                            id="taskTitle"
                            name="taskTitle"
                            placeholder="Enter task title"
                            className="p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            type="date" name="dob" id="" className='p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            type="text" placeholder='enter employee name' className='p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text" placeholder='development, design ' className='p-2 border border--300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
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
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
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
