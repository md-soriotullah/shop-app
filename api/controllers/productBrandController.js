import Brand from "../models/Brand.js"
import { createError } from "../utils/createError.js"


// get all brands
export const getAllProductBrand = async (req, res, next) => {
    try {
        const brands = await Brand.find();
        res.status(200).json({
            brands : brands,
            message : "get brand success"
        })
    } catch (error) {
        next(createError())
    }
};

// get all brands
export const createProductBrand = async (req, res, next) => {
    try {
        const {name, slug} = req.body;
        const brand = await Brand.create({
            name, slug, photo : req.file.filename,
        });
        res.status(200).json({
            brand,
            message : "Brand created successfull"
        })
    } catch (error) {
        next(error)
    }
};


// get single brands
export const getSingleBrand = async (req, res, next) => {
    try {
        const {id} = req.params;
        const brand = await Brand.findById(id);
        res.status(200).json({
            brand,
            message : "Get Single brand successfull"
        })
    } catch (error) {
        next(error)
    }
};

// get single brands
export const deleteBrand = async (req, res, next) => {
    try {
        const {id} = req.params;
        const brand = await Brand.findByIdAndDelete(id);
        res.status(200).json({
            message : "Brand delete successfull"
        })
    } catch (error) {
        next(error)
    }
};

// Update brands
export const updateBrand = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {name, slug, photo} = req.body;
        const brand = await Brand.findByIdAndUpdate(id, {
            name, slug, photo
        },{new: true}
        );
        res.status(200).json({
            brand,
            message : "Brand Updated successfull"
        }
        )
    } catch (error) {
        next(error)
    }
};