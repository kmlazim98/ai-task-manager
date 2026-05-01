# ai-task-manager
AI Task Manager with Firebase
# 🔥 AI Task Manager

> An AI-powered task management app built with Firebase

![Firebase](https://img.shields.io/badge/Firebase-039BE5?logo=Firebase&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)

## 🚀 Live Demo
Open `index.html` in any browser — no server needed!

## ✨ Features
- 🔐 Email/Password Authentication
- ✅ Create tasks with title, description, priority & due date
- 📋 Real-time task updates
- 🎯 Priority levels (High / Medium / Low)
- 🗑️ Delete tasks instantly
- ✓ Mark tasks as complete/incomplete
- 🔒 Data isolated per user (security rules)

## 🛠️ Tech Stack
| Technology        | Purpose              |
|-------------------|----------------------|
| Firebase Auth     | User authentication  |
| Cloud Firestore   | Real-time database   |
| Vanilla JS        | App logic            |
| HTML/CSS          | UI & styling         |

## ⚙️ Setup & Installation
1. Clone this repo:
   git clone https://github.com/KMLAZIM98/ai-task-manager.git

2. Open index.html in your browser

3. Sign up with email & password

4. Start managing your tasks!

## 🔐 Firebase Configuration
Replace the config in index.html with your own:
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     ...
   };

## 📁 Project Structure
ai-task-manager/
    ├── index.html        # Main app file
    ├── firebaseConfig.js # Firebase setup
    ├── .gitignore        # Ignores .env & node_modules
    ├── package.json      # Dependencies
    └── README.md         # This file

## 🔒 Security Rules
Users can only read/write their own tasks:
   match /tasks/{taskId} {
     allow read, write: if request.auth.uid == resource.data.userId;
   }

## 📊 Firebase Project Details
- Project ID:  ai-powered-e4bd1
- Auth:        Email/Password
- Database:    Cloud Firestore
- Plan:        Spark (Free)
