
# 💻 Online Code IDE

**Online Code IDE** is a collaborative, full-stack code editor designed for real-time programming sessions. Built with modern web technologies, it supports live editing with syntax highlighting, JWT-based authentication, and multi-language support—all powered by the Monaco Editor and WebSockets.

---

## 🚀 Overview

This project replicates the experience of cloud-based code editors like Replit and CodePen, but with real-time collaboration at its core. Developers can log in securely, join shared rooms, and write or review code together seamlessly.

---

## 🌟 Features

- 🧠 Real-time collaborative editing with **Socket.IO**
- 🖊️ Rich code editing via **Monaco Editor**
- 🌐 Multi-language syntax support (JavaScript, C++, Python, etc.)
- 🔒 **JWT-based Authentication** for secure access
- 📂 Project sharing via unique room IDs
- ⚡ Live cursor updates and typing sync
- 🎨 Theme support and customizable UI (light/dark)
- 🧪 Code execution-ready backend integration (future scope)

---

## 🛠️ Tech Stack

**Frontend**: React, Vite, Tailwind CSS, Monaco Editor  
**Backend**: Node.js, Express.js  
**Real-time**: WebSockets (Socket.IO)  
**Authentication**: JWT  
**Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 📁 Project Structure

```
onlineCodeIDE/
├── frontend/         # React + Monaco-based UI
│   └── src/
│
├── backend/          # Express.js API + WebSocket logic
│   ├── routes/
│   ├── models/
│   └── app.js
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/iamansoni07/onlineCodeIDE.git
cd onlineCodeIDE
```

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to use the app.

---

## 🧪 Roles

- **Guest**: Can join shared code sessions (optional)
- **Authenticated User**: Create/join coding rooms and collaborate
- **Room Owner**: Manage room permissions (future scope)

---

## 👨‍💻 Author

**Aman Soni**  
📧 [aman.soni0713@gmail.com](mailto:aman.soni0713@gmail.com)  
🌐 [Portfolio](https://amansonidev.netlify.app)  
💼 [LinkedIn](https://www.linkedin.com/in/amansoni0713/)  
🐙 [GitHub](https://github.com/iamansoni07)

---

## 📄 License

This project is licensed under the **MIT License**.

---
