import mongoose from "mongoose";

// CReate a mongoDB connection
const mongoDbConnect = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoDB connected successfull`.bgBlue.black);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
};

// Export
export default mongoDbConnect;