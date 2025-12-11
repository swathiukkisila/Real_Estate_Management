import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

// app.use(
//   cors({
//       origin: "https://real-estate-management-zeta.vercel.app", // Allow only frontend origin
//       methods: "GET,POST,PUT,DELETE",
//       credentials: true, // Allow cookies & authentication headers
//     })
// );
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://real-estate-management-zeta.vercel.app"
    ],
    credentials: true,
  })
);
app.set("trust proxy", 1);


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
