import express from "express"
import { createProductTag, deleteProductTag, getAllProductTags, getSingleProductTag, updateProductTag } from "../controllers/productTagController.js";

// Create Router
const router = express.Router()

// Routes
router.route("/tag").get(getAllProductTags).post(createProductTag);
router.route("/tag/:id").get(getSingleProductTag).put(updateProductTag).delete(deleteProductTag);


// Export
export default router;