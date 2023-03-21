import Tag from "../models/Tag.js";

// get all Product tags
export const getAllProductTags = async (req, res, next) => {
    try {
       const data = await Tag.find(); 
       res.status(200).json({
        tags: data,
        message: "Get all Tag success"
       })
    } catch (error) {
        next(error)
    }
};

// Create Product tag
export const createProductTag = async (req, res, next) => {
    try {
       const {name, slug} = req.body;
       const data = await Tag.create({name, slug}); 
       res.status(200).json({
        tag: data,
        message: "Create Tag success"
       })
    } catch (error) {
        next(error)
    }
};

// Get Single Product tag
export const getSingleProductTag = async (req, res, next) => {
    try {
        const {id} = req.params;
       const {name, slug} = req.body;
       const data = await Tag.findById(id); 
       res.status(200).json({
        tag: data,
        message: "Get Single Tag successfull"
       })
    } catch (error) {
        next(error)
    }
};

// Update Product tag
export const updateProductTag = async (req, res, next) => {
    try {
        const {id} = req.params;
       const {name, slug} = req.body;
       const data = await Tag.findByIdAndUpdate(id, 
        {name, slug},
        {new : true}); 
       res.status(200).json({
        tag: data,
        message: "Tag Updated successfull"
       })
    } catch (error) {
        next(error)
    }
};

// Delete Product tag
export const deleteProductTag = async (req, res, next) => {
    try {
        const {id} = req.params;
       const {name, slug} = req.body;
       const data = await Tag.findByIdAndDelete(id); 
       res.status(200).json({
        tag: data,
        message: "Tag Deleted successfull"
       })
    } catch (error) {
        next(error)
    }
};