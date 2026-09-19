import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || '3200';
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
    res.status(200).json({message: "Hello"})
})

app.listen(PORT, ()=>{
    console.log(`server on ${PORT}`);
})
