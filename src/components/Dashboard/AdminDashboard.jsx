import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = (props) => {
    return (
        <div>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTasks />

        </div>

    )
}

export default AdminDashboard
