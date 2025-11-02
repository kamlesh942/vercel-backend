import cors from "cors";

const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || "https://vercel-frontend-lime.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
});

export default corsMiddleware;
