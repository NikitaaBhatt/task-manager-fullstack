# TaskFlow — Full Stack Task Manager

TaskFlow is a full-stack task management application built as part of the Studio Graphene Associate Software Engineer assignment.
This project implements Exercise 1 — Personal Task Manager.

The application allows users to create, update, delete, search, filter and manage personal tasks through a modern and responsive interface. The focus of this project was to build clean frontend/backend architecture, maintain readable and scalable code and deliver a polished user experience while keeping the implementation simple and maintainable.


# Live Demo

Frontend: https://task-manager-fullstack-orcin.vercel.app

Backend: https://taskflow-backend-c7p9.onrender.com/api/tasks

> Note: The backend is hosted on Render's free tier, so the first request may take a few seconds if the server is inactive.


# Features

## Core Features

- Create new tasks with:
  - required title
  - optional description
  - optional due date
  - priority selection

- Edit existing tasks
- Delete tasks with confirmation prompt
- Mark tasks as complete/incomplete
- Filter tasks:
  - All
  - Active
  - Completed
- Search tasks by title or description



## UI/UX Features

- Responsive modern interface
- Toast notifications for task actions
- Smooth transitions and hover interactions
- Status indicators (Pending / Completed)
- Overdue task highlighting
- Empty state UI
- Active vs completed task statistics
- Automatic scroll to edit form
- Mobile responsive layout



## Persistence

Tasks are persisted using a local JSON file, so data remains available even after restarting the backend server.



# Tech Stack

## Frontend

| Technology      | Why It Was Used                       |
|-----------------|---------------------------------------|
| React           | Component-based frontend architecture |
| Vite            | Fast development environment          |
| Tailwind CSS    | Rapid and responsive UI styling       |
| React Hot Toast | Lightweight toast notifications       |



## Backend

| Technology | Why It Was Used                 |
|------------|---------------------------------|
| Node.js    | JavaScript runtime              |
| Express.js | REST API creation               |
| UUID       | Unique task IDs                 |
| Nodemon    | Development server auto-restart |



# Project Structure

```bash
task-manager-fullstack/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```



# How to Run Locally

## Prerequisites

Make sure Node.js is installed on your system.


# 1. Clone Repository

```bash
git clone https://github.com/NikitaaBhatt/task-manager-fullstack.git
```


# 2. Open Project

```bash
cd task-manager-fullstack
```


# Backend Setup

## 3. Move Into Server Folder

```bash
cd server
```

## 4. Install Dependencies

```bash
npm install
```

## 5. Start Backend Server

```bash
npm run dev
```

Backend runs at:

```bash
http://localhost:5000
```



# Frontend Setup

Open a NEW terminal.

## 6. Move Into Client Folder

```bash
cd client
```

## 7. Install Dependencies

```bash
npm install
```

## 8. Start Frontend

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```



# API Documentation


## Get All Tasks

### Request

```http
GET /api/tasks
```

### Response

```json
[
  {
    "id": "123",
    "title": "Complete assignment",
    "description": "Finish full stack project",
    "completed": false,
    "priority": "high",
    "dueDate": "2026-06-10"
  }
]
```



## Create Task

### Request

```http
POST /api/tasks
```

### Body

```json
{
  "title": "Complete assignment",
  "description": "Finish project",
  "priority": "high",
  "dueDate": "2026-06-10"
}
```

### Response

```json
{
  "id": "123",
  "title": "Complete assignment",
  "description": "Finish project",
  "completed": false,
  "priority": "high",
  "dueDate": "2026-06-10"
}
```


## Update Task

### Request

```http
PUT /api/tasks/:id
```

### Body

```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

### Response

```json
{
  "message": "Task updated successfully"
}
```



## Toggle Task Completion

### Request

```http
PATCH /api/tasks/:id/toggle
```

### Response

```json
{
  "message": "Task status updated"
}
```


## Delete Task

### Request

```http
DELETE /api/tasks/:id
```

### Response

```json
{
  "message": "Task deleted successfully"
}
```



# Design Decisions

Some intentional decisions made during development:

- Used JSON file persistence instead of a database to keep the project lightweight and focused on full-stack fundamentals.
- Chose a component-based frontend structure for readability and maintainability.
- Added toast notifications and responsive interactions to improve user experience.
- Used Tailwind CSS for faster UI development and cleaner styling consistency.
- Kept authentication out of scope based on assignment requirements.



# Challenges Faced

- Managing smooth task state transitions while maintaining clean UI behavior.
- Balancing feature completeness with simplicity and maintainability.
- Designing a responsive interface without overcomplicating the frontend architecture.



# What Works

- Full CRUD task functionality
- Search and filtering
- Persistent storage
- Responsive design
- Task completion handling
- Overdue task highlighting
- Toast notifications
- Clean frontend/backend integration



# What I Would Improve With More Time

- Add drag-and-drop task reordering
- Add due date sorting options
- Improve task reordering animations
- Add unit/integration tests
- Add accessibility improvements
- Add authentication and multi-user support


# Testing

Formal automated tests were not implemented due to time constraints.  
Manual testing was performed for:
- CRUD operations
- API integration
- Filtering
- Search
- Responsive UI
- Error handling



# AI Usage Disclosure

AI tools were used during development for:
- brainstorming UI improvements,
- debugging issues,
- refining component structure,
- improving API integration and deployment flow.

All code was reviewed, understood and manually integrated into the final project.



# Author

Nikita Bhatt