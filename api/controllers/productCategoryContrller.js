import { errorHandle } from "../middlewares/errorHandler.js";
import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";

// get all product category
export const getAllProductCategory = async (req, res, next) => {
    try {
        const data = await Category.finds();
        res.status(200).json({
            categories: data,
            message: "get all data sussess"
        })
    } catch (error) {
        next(createError("This is custom error", 400))
    }
};


// create all product category
export const createAllProductCategory = async (req, res, next) => {
    try {
        const {name, slug} = req.body;
        const data = await Category.create({
            name, slug, photo: req.file.filename
        });
        res.status(200).json({
            category: data,
            message: "Category added Successfull"
        })
    } catch (error) {
        next(createError("Data cannot save", 400))
    }
};


// get Single product category
export const getSingleProductCategory = async (req, res,next) => {
    try {
        const { slug } = req.params;
        const data = await Category.findOne({slug});
        res.status(200).json({
            category: data,
            message: "Single Category added Successfull"
        })
    } catch (error) {
        next(createError())
    }
};


// Delete Single product category
export const deleteProductCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Category.findByIdAndDelete(id);
        res.status(200).json({
            message: "Category Delete Successfull"
        })
    } catch (error) {
        next(error)
    }
};


// Upadte Single product category
export const updateProductCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {name, slug, photo} = req.body;
        const data = await Category.findByIdAndUpdate(id, {name, slug, photo},
        {new: true}
        );
        res.status(200).json({
            category: data,
            message: "Category Updated Successfull"
        })
    } catch (error) {
        next(error)
    }
};