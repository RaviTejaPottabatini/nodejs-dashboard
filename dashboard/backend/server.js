import express from "express";
import cors from "cors";

import projectsRouter from "./routes/projects.js";
import updatesRouter from "./routes/updates.js";
import actionsRouter from "./routes/actions.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectsRouter);
app.use("/api/updates", updatesRouter);
app.use("/api/actions", actionsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
