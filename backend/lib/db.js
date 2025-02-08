import mongoose from "mongoose";
const connection = {};

async function dbconnect() {
    if (connection.isConnected) {
        console.log("Already connected");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "");
        connection.isConnected = db.connections[0].readyState || 0;

        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export default dbconnect;
