# Nova AI – Full Stack  AI Chatbot

Nova AI is a full-stack AI chatbot built with **React (Vite)** and integrated with the **Google Gemini API**. It includes a complete authentication system (register, login, logout) with protected routes and context-based state management. The application is deployed on **Vercel**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://nova-ai-wine.vercel.app)


**Frontend Repo:** https://github.com/mishra-anik/Nova-Ai-Frontend.git  

**Backend Repo:** https://github.com/mishra-anik/Nova-Ai-Backend.git

---

## Features
- AI chatbot powered by Google Gemini API  
- User authentication: Register, Login, Logout  
- Protected routes with role-based access control  
- Global auth state using React Context  
- Loading skeleton during auth verification  
- Responsive UI  
- Environment-based configuration  
- Vercel deployment

---

## Tech Stack
- **Frontend:** React.js (Vite), React Router, Context API  
- **AI:** Google Gemini API  
- **Deployment:** Vercel

---

## Folder Structure

client/
└── src/
├── component/
│ └── LoadingSkeleton.jsx
├── features/
│ ├── AppRoutes.jsx
│ ├── AuthProvider.jsx
│ └── ProtectedRoute.jsx
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Setting.jsx
│ └── About.jsx
├── App.jsx
└── main.jsx


---

## Authentication Flow
- `AuthProvider` initializes and manages auth state  
- `LoadingSkeleton` renders while auth status is checked  
- `ProtectedRoute` blocks unauthorized access  
- Public routes: Login, Register  
- Private routes: Chat, Settings, Profile  
- Logout clears auth state and redirects

---

## Setup & Run
```bash
git clone https://github.com/mishra-anik/Nova-Ai-Frontend.git
cd Nova-Ai-Frontend
npm install
npm run dev


Create .env:

VITE_API_URL=your_api_url

Author: Anik Mishra
