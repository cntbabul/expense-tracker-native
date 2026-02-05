import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import transactionRoutes from "./routes/transactionsRoute.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import job from "./config/cron.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
if (process.env.NODE_MODE === "production") job.start();

//custom middlewares
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

//routes
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "Server is running" });
});
app.use('/api/v1/transactions', transactionRoutes);

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});