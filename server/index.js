import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import {dirname, join} from 'path'
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

// app.use(cors({
//     origin: 'http://localhost:5173'
// }));
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log("server en el puerto", PORT);
