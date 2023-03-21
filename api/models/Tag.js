import mongoose from "mongoose";

// Schema
const tagSchema = mongoose.Schema({
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
export default mongoose.model("Tag", tagSchema);