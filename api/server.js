import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// Init express
const app = express();
dotenv.config();

// Environment variable
const PORT = process.env.PORT || 9090 ;

// Listen
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`.bgGreen.black);
})