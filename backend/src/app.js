require("dotenv").config();

const express = require("express");
const cors = require("cors");

const codingRoutes = require("./routes/coding.routes");

const app = express();

const allowedOrigins = [
  "http://localhost:5501",
  "http://127.0.0.1:5501",
  "https://abhiraj-portfolio-ivory.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("Blocked CORS origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Coding API is running",
  });
});

app.use("/api/coding", codingRoutes);

// Central error handler
app.use((err, req, res, next) => {
  console.error("API error:", err.message);

  if (res.headersSent) {
    return next(err);
  }

  const status = err.message === "Not allowed by CORS" ? 403 : 500;

  return res.status(status).json({
    success: false,
    message:
      err.message === "Not allowed by CORS"
        ? "Origin not allowed"
        : "Internal server error",
  });
});

module.exports = app;
