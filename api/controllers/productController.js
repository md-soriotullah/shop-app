import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/Product.js";

// Get All Products
export const getAllProducts = async(req, res, next) => {
    try {
        const data = await Product.find();
        res.status(200).json({
            products: data,
            Message: "Get All Product Success"
        })
    } catch (error) {
        next(error)
    }
};

// Create Single Product
export const createSingleProduct = async(req, res, next) => {
    try {
        const {name} = req.body;
        console.log(createSlug(name));
        // const {name} = req.body;
        // const data = await Product.create({name});
        // res.status(200).json({
        //     products: data,
        //     Message: "Product Created Success"
        // })
    } catch (error) {
        next(error)
    }
};

// Get Single Product
export const getSingleProduct = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {name, slug} = req.body;
        const data = await Product.findById(id,{name, slug});
        res.status(200).json({
            products: data,
            Message: "Single Product Get Success"
        })
    } catch (error) {
        next(error)
    }
};

// Update Product
export const updateProduct = async(req, res, next) => {
    try {
        const {id} = req
        const {name, slug} = req.body;
        const data = await Product.findByIdAndUpdate(id,{name, slug}, {new: true});
        res.status(200).json({
            products: data,
            Message: "Product Updated Successfull"
        })
    } catch (error) {
        next(error)
    }
};

// Delete Product
export const deleteProduct = async(req, res, next) => {
    try {
        const {id} = req
        const {name, slug} = req.body;
        const data = await Product.findByIdAndDelete(id,{name, slug});
        res.status(200).json({
            products: data,
            Message: "Product Updated Successfull"
        })
    } catch (error) {
        next(error)
    }
};