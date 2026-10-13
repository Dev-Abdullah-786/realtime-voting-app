require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");

// Connect to MongoDB
connectDB();

const app = express();
const httpServer = http.createServer(app);

const isProduction = process.env.NODE_ENV === "production";

// Socket.io with CORS
const io = new Server(httpServer, {
  cors: {
    origin: isProduction ? false : "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors({ origin: isProduction ? false : "http://localhost:3000" }));
app.use(express.json());

// Serve React production build
if (isProduction) {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));

  // Catch-all: serve index.html for any non-API route (SPA support)
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
} else {
  // Dev health check
  app.get("/", (req, res) => {
    res.json({ status: "LivePoll server is running 🚀" });
  });
}

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🚀 LivePoll server running on http://localhost:${PORT}`);
});
