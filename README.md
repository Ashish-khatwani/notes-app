# 📒 Notes Manager (MERN)

A modern full-stack **Notes Management App** built with **React, Tailwind CSS, Node.js, Express, and MongoDB**.  
Users can register, log in, and create, edit, or delete notes. The app features JWT-based authentication, a responsive UI, and clean design.

---

## 🚀 Features
- 🔐 **Authentication** — Register & Login using JWT  
- 📝 **Notes Management** — Create, Read, Update, Delete (CRUD)  
- 🎨 **UI/UX** — Responsive layout styled with Tailwind CSS  
- ⚡ **API** — RESTful backend with Express & MongoDB  
- 💾 **Persistence** — Securely stores notes per user  

---

## 📂 Project Structure
notes-manager/
├── backend/ # Express backend (API + MongoDB + JWT)
├── frontend/ # React + Tailwind CSS frontend
├── .gitignore
└── README.md

yaml
Copy code

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas or local)  
- **Auth:** JWT (JSON Web Token)  

---

## ⚙️ Prerequisites
Before you begin, make sure you have:
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [MongoDB](https://www.mongodb.com/) (Atlas or local)  
- [Git](https://git-scm.com/)  

---

## 🔧 Backend Setup

1. Navigate to backend:
   ```bash
   cd backend
Create a .env file:

ini
Copy code
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
JWT_EXPIRES_IN=7d
Install dependencies:

bash
Copy code
npm install
Start the backend:

bash
Copy code
# Development (with nodemon)
npm run dev

# Production
npm start
API will be available at: http://localhost:5000/api

🎨 Frontend Setup
Navigate to frontend:

bash
Copy code
cd frontend
Create a .env file:

bash
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Install dependencies:

bash
Copy code
npm install
Start the frontend:

bash
Copy code
npm start
Frontend will run at: http://localhost:3000

📡 API Endpoints
Auth
POST /api/auth/register → Register new user

POST /api/auth/login → Login user

Notes (Protected)
GET /api/notes → Get all notes for logged-in user

POST /api/notes → Create a new note

PUT /api/notes/:id → Update a note

DELETE /api/notes/:id → Delete a note

⚠️ All notes routes require Authorization: Bearer <JWT_TOKEN>

📝 Example Workflow
Register → Login → Get JWT token

Add JWT token to request headers

Create and manage notes

