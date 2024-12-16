import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import preguntasRoutes from "./routes/preguntas.routes.js";
import  cors from "cors";

const app = express()

app.use(cors({
    origin: 'https://tangerine-muffin-b59418.netlify.app/',
    credentials: true
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", preguntasRoutes);

export default app;


 