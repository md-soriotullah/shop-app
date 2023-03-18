import express from "express";
import { createAllProductCategory, getAllProductCategory, getSingleProductCategory, deleteProductCategory, updateProductCategory } from "../controllers/productCategoryContrller.js";
import { productCategoryMulter } from "../utils/multer.js";

// Create Router
const router = express.Router();

// Routes
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter,createAllProductCategory, );
router.get("/category/:slug", getSingleProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", updateProductCategory);
router.patch("/category/:id", updateProductCategory);

// Export
export default router;