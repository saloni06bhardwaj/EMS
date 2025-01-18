import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

  return (
    <div className=' bg-gray-700 px-4 py-3 flex gap-6 items-center justify-between rounded-lg shadow-lg'>
      {data.tasks.map((task,idx) => {

        if (task.active) {
          return <AcceptedTask key={idx}  data={task} />
        }
        if (task.newTask) {
          return <NewTask key={idx} data={task} />
        }
        if (task.completed) {
          return <CompleteTask key={idx} data={task} />
        }
        if (task.failed) {
          return <FailedTask key={idx} data={task} />
        }

      }
    )
    }
    </div>
  )
}

export default TaskList
