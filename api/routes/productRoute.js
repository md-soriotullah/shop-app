import express from "express";
import { createSingleProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/productController.js";

// Create Router
const router = express.Router();

// Routes
router.route("/").get(getAllProducts).post(createSingleProduct);
router.route("/:id").put(updateProduct).get(getSingleProduct).delete(deleteProduct);

// Export
export default router;