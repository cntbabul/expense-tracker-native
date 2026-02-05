import { neon } from "@neondatabase/serverless";
import 'dotenv/config'

if (!process.env.NEON_DB_URL) {
    throw new Error("NEON_DB_URL is not defined in environment variables");
}

export const sql = neon(process.env.NEON_DB_URL);

export async function dbConnect() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
     id SERIAL PRIMARY KEY,
     user_id VARCHAR(255) NOT NULL,
     title VARCHAR(255) NOT NULL,
     amount DECIMAL(10,2) NOT NULL,
     category VARCHAR(50) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) `;
        console.log(("Database connected/initialised successfully"))
    } catch (error) {
        console.log(error, "Error connecting to database")
        process.exit(1)
    }
}