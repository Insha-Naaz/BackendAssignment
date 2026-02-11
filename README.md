# Backend Developer Intern Assignment – Scalable REST API

This project is a scalable REST API built with Node.js, Express, Prisma, and JWT authentication.  
It includes role-based access control and secure CRUD operations.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL / MySQL (via Prisma)
- JWT Authentication
- Thunder Client / Postman
- bcrypt (password hashing)

---

## 📂 Project Structure
src/
├── controllers/
│ └── taskController.js
├── middleware/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── routes/
│ ├── authRoutes.js
│ ├── taskRoutes.js
│ └── adminRoutes.js
├── config/
│ ├── db.js
│ └── prisma.js
├── app.js
└── server.js


---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Passwords are hashed using bcrypt
- Role-based access control:
  - USER
  - ADMIN

JWT is required for protected routes and must be sent in headers as:

Authorization: Bearer <JWT_TOKEN>

---

## 📌 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/v1/auth/register | Register new user |
| POST | /api/v1/auth/login | Login and receive JWT |

---

### Task Routes (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/v1/tasks | Get logged-in user tasks |
| POST | /api/v1/tasks | Create new task |
| PUT | /api/v1/tasks/:id | Update task |
| DELETE | /api/v1/tasks/:id | Delete task |

---

### Admin Routes (ADMIN only)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/v1/admin/stats | View admin statistics |

---

## 🛡️ Security Practices

- JWT expiration enforced
- Role-based authorization middleware
- Input validation
- Resource ownership checks
- CORS enabled

---
Roles:

User: Can CRUD own tasks

Admin: Can CRUD all tasks (if implemented)

## ⚙️ Setup Instructions

### Clone Repository
```bash
git clone <your-repo-url>
cd backendAssignment
npm install

Environment Variables
.env: PORT=5000
JWT_SECRET=supersecretkey
DATABASE_URL="file:./dev.db"

▶️ Run Project
npm run dev
Server runs on:http://localhost:5000

📊 Scalability Notes

Modular architecture for easy expansion

Can be extended to microservices

Redis caching can be added

Docker-ready

Load balancer friendly

📄 API Documentation

Thunder Client 

👤 Author

Insha Naaz