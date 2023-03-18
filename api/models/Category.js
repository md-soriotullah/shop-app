import mongoose from "mongoose";

// Schema
const categorySchema = mongoose.Schema({
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
    photo: {
        type: String,
        default: null,
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    },
    // id: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true
    // },
},
{
    timestamps: true
}
);

// Export model
export default mongoose.model("Category", categorySchema);