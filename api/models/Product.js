import mongoose from "mongoose";

// Schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    regular_price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number
    },
    stock: {
        type: Number,
        default: null
    },
    sort_desc: {
        type: String,
        trim: true
    },
    long_desc: {
        type: String,
        trim: true
    },
    photo: {
        type: String,
        default: null,
        trim: true
    },
    gallery: {
        type: Array,
        default: null,
        trim: true
    },
    catagories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Category"
    },
    tags: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Tag"
    },
    brands: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Brand"
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
}
);

// Export model
export default mongoose.model("Product", productSchema);