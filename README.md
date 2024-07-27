# PH University Management System (UMS)

## Overview
The PH University Management System (UMS) is a comprehensive full-stack application designed to facilitate efficient management of university operations. It provides robust functionalities for students, faculty, and administrators, covering a wide range of academic and administrative tasks. The primary goal of UMS is to streamline university processes, enhance data security, and ensure role-based access control for different user types.

## [Server Code Link](https://github.com/fl9mdasif/university-management-system-ts-mongoose)

## Features

### Authentication
- **Student, Faculty, Admin**:
  - Secure login and logout.
  - Password update functionality.

### Profile Management
- - **Student, Faculty, Admin**:
  - Manage and update profile information, Change password, reset password through gmail etc.

### Academic Process
- **Student**:
  - Enroll in courses for specific semesters.
  - View class schedules and grades.
  - Access notice boards and events.
- **Faculty**:
  - Manage student grades.
  - Access student’s personal and academic information.
- **Admin**:
  - Manage semesters, courses, offered courses, sections, rooms, and buildings and everything .
 **Super Admin**:
  - Manage everything inclueded Amdin management.


### User Management
- **Admin**:
  - Manage multiple user accounts.
  - Block/unblock users.
  - Change user passwords.

## API Endpoints

### User
- `POST /users/create-student`: Create a new student.
- `POST /users/create-faculty`: Create a new faculty.
- `POST /users/create-admin`: Create a new admin.

### Student
- `GET /students`: Retrieve all students.
- `GET /students/:id`: Retrieve a student by ID.
- `PATCH /students/:id`: Update a student by ID.
- `DELETE /students/:id`: Delete a student by ID.
- `GET /students/my-profile`: Retrieve the logged-in student's profile.

### Faculty
- `GET /faculties`: Retrieve all faculties.
- `GET /faculties/:id`: Retrieve a faculty by ID.
- `PATCH /faculties/:id`: Update a faculty by ID.
- `DELETE /faculties/:id`: Delete a faculty by ID.
- `GET /faculties/my-profile`: Retrieve the logged-in faculty's profile.

### Admin
- `GET /admins`: Retrieve all admins.
- `GET /admins/:id`: Retrieve an admin by ID.
- `PATCH /admins/:id`: Update an admin by ID.
- `DELETE /admins/:id`: Delete an admin by ID.
- `GET /admins/my-profile`: Retrieve the logged-in admin's profile.

### Auth
- `POST /auth/login`: User login.
- `POST /auth/refresh-token`: Refresh authentication token.
- `POST /auth/change-password`: Change password.
- `POST auth/forgot-password`
- `POST auth/reset-password`


## Technologies Used
- **Frontend**: Typescript, React, Redux, Tailwind, Daisy UI
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT
- **Validation**: Zod
- **Code Quality**: es-lint, Prettier

## How to run my code 
1. **Clone this client repository**:
   ```bash
     git clone https://github.com/fl9mdasif/university-management-system-client
   ```
    **run this code**:
   ```bash
     npm run start-dev
   ```

2. **Clone the Server repository**:
   ```bash
     git clone https://github.com/fl9mdasif/university-management-system-ts-mongoose
   ```
   **run the server side code**:
     ```bash
       npm run start-dev
     ```
   
