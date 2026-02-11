# Task Management API Documentation

## Base URL:http://localhost:5000/api/v1

---

## 🔐 Authentication

### Register User
**POST** `/auth/register`

**Request Body**
```json
{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "password": "Test@123",
  "role": "USER"
}
Response
{
  "message": "User registered successfully"
}
Login User

POST /auth/login

Request Body:{
  "email": "testuser@gmail.com",
  "password": "Test@123"
}
Response:{
  "token": "JWT_TOKEN_HERE"
}
Authorization Header (for protected routes):Authorization: Bearer <token>
📌 Tasks (Protected Routes)
Get All Tasks

GET /tasks

Headers:Authorization: Bearer <token>
Create Task

POST /tasks

Request Body:{
  "title": "Sample Task",
  "description": "Task created via API"
}
Update Task

PUT /tasks/:id

Request Body:{
  "title": "Updated Task",
  "completed": true
}
Delete Task

DELETE /tasks/:id
👑 Admin Routes (ADMIN only)
Get Admin Stats

GET /admin/stats
Headers:Authorization: Bearer <ADMIN_TOKEN>
❌ Common Errors
Status Code	Message
400	Validation error
401	Invalid or expired token
403	Access denied
✅ Notes

All protected routes require JWT authentication

Role-based access control enforced via middleware

Passwords are securely hashed using bcrypt
OVERALL FRONTEND PLAN: Flow:

User logs in → gets JWT

JWT saved in browser (localStorage)

JWT sent in Authorization header

Backend returns tasks

Frontend displays tasks