import express from "express";
import morgan from "morgan";
import errorHandler from "./middlewares/error.middleware.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import database from "./database.js";
import cors from "cors";

// import routes
import authRoutes from "./routes/auth.route.js";
import todoRoutes from "./routes/todo.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

app.enable("trust proxy");

// Enable other domains to access your application
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

dotenv.config({ path: "./.env" });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auths", authRoutes);
app.use("/api/v1/todos", todoRoutes);
app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

database(process.env.BASE_URL);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
