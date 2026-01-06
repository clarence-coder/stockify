import express from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express';   

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL})); //allow requests from frontend
app.use(clerkMiddleware()); //auth obj will be attached to req
app.use(express.json()); //parses JSON request bodie{}s.
app.use(express.urlencoded({ extended: true })); //parses form data (like html forms).

app.get("/", (req, res) => { 
    res.json({
        message: "Welcome to Stockify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
 });
});

app.listen(ENV.PORT, () => console.log("Server is running on PORT", ENV.PORT));