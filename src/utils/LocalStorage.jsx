
localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile sales data for the last quarter.",
                "taskDate": "2025-01-03",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": true
            },
            {
                "taskTitle": "Team Meeting Preparation",
                "taskDescription": "Prepare agenda and slides for the team meeting.",
                "taskDate": "2025-01-05",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": true
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 2,
            "completed": 2,
            "failed": 2
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Client Follow-up",
                "taskDescription": "Contact client XYZ for feedback.",
                "taskDate": "2025-01-04",
                "category": "Client Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Project Update",
                "taskDescription": "Submit progress report for project Alpha.",
                "taskDate": "2025-01-06",
                "category": "Project Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Vihaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "System Testing",
                "taskDescription": "Test the latest system updates.",
                "taskDate": "2025-01-03",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Documentation Update",
                "taskDescription": "Update the user manual for version 2.1.",
                "taskDate": "2025-01-05",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Ananya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Perform a full inventory audit.",
                "taskDate": "2025-01-02",
                "category": "Audit",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Customer Feedback Analysis",
                "taskDescription": "Analyze feedback from December.",
                "taskDate": "2025-01-04",
                "category": "Analysis",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Advika",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Marketing Strategy Plan",
                "taskDescription": "Draft a new marketing strategy for Q1.",
                "taskDate": "2025-01-06",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Internal Training",
                "taskDescription": "Prepare materials for training session.",
                "taskDate": "2025-01-07",
                "category": "Training",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    }
];



const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
        "tasks": []
    }
];

export  const setLocalStorage =() =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
   const employees =JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
 
   return{employees, admin};  
}