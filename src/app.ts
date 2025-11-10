import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
// import userRoutes from "./routes/user.routes";
// import personalRoutes from "./routes/personalDetail.routes";
// import educationRoutes from "./routes/education.routes";
// import workRoutes from "./routes/work.routes";
// import projectRoutes from "./routes/project.routes";
// import skillRoutes from "./routes/skill.routes";
// import languageRoutes from "./routes/language.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/personal", personalRoutes);
// app.use("/api/educations", educationRoutes);
// app.use("/api/works", workRoutes);
// app.use("/api/projects", projectRoutes);
// app.use("/api/skills", skillRoutes);
// app.use("/api/languages", languageRoutes);

export default app;
