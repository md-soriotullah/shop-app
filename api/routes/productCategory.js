import express from "express";
import { getAllProductCategory } from "../controllers/productCategoryContrller.js";

// Create Router
const router = express.Router();

// Routes
router.get("/category", getAllProductCategory);

// Export
export default router;