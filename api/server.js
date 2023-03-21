import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import productCategoryRoute from "./routes/productCategory.js";
import productBrandRoute from "./routes/productBrand.js";
import productTagRoute from "./routes/productTag.js";
import mongoDbConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

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
app.use("/api/v1/product", productRoute);
app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandRoute);
app.use("/api/v1/product", productTagRoute);

// Environment variable
const PORT = process.env.PORT || 9090 ;

// use error Handler
app.use(errorHandle);


// Listen
app.listen(PORT, () => {
    mongoDbConnect();
    console.log(`server running on port ${PORT}`.bgGreen.black);
});