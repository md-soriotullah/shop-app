import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import mongoDbConnect from "./config/db.js";

// Init express
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// Set static
app.use(express.static("api/public"));

// Routes
app.use("/api/v1/product", productCategoryRoute)

// Environment variable
const PORT = process.env.PORT || 9090 ;

// Listen
app.listen(PORT, () => {
    mongoDbConnect();
    console.log(`server running on port ${PORT}`.bgGreen.black);
});