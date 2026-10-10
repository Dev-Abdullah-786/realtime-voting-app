# LivePoll Realtime Voting App

LivePoll is a small real-time voting application where users can create polls, share them, and vote instantly. The app uses React on the frontend, Node.js/Express on the backend, Socket.IO for live updates, and MongoDB for storing polls.

## Features

- Create a poll with 2 to 6 options
- Vote in real time
- See updated results instantly across connected frontends
- Browse existing polls
- Responsive React UI

## Tech Stack

- Frontend: React, React Router, Socket.IO frontend
- Backend: Express.js, Socket.IO, Mongoose
- Database: MongoDB

## Project Structure

- frontend/: React frontend
- backend/: Express backend and socket backend
- backend/models/: Mongoose models
- backend/routes/: API routes

## Getting Started

### 1. Install dependencies

From the project root, run:

```bash
npm run install-all
```

### 2. Configure environment

Create a `.env` file inside the `backend` folder with your MongoDB connection string:

```env
MONGO_URI=mongodb://127.0.0.1:27017/livepoll
```

### 3. Start the app

Run:

```bash
npm start
```

This will start both the frontend and the backend concurrently.

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Available Scripts

From the root directory:

- `npm start` — start both frontend and backend
- `npm run backend` — start the backend only
- `npm run frontend` — start the frontend only
- `npm run build` — build the React frontend
- `npm run start:prod` — build the frontend and start the backend in production mode
- `npm run install-all` — install dependencies for the root, backend, and frontend

## Notes

- The backend serves the production React build when the app is started in production mode.
- Socket.IO is used for live vote updates inside each poll room.
