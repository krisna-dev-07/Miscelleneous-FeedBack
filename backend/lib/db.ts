import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {};

export async function dbconnect() {
    if (connection.isConnected) {
        console.log("already connected")
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "")
        connection.isConnected = db.connections[0].readyState ?? 0;

        console.log("database connected");
        
    } catch (error) {
        console.log("database connection failed",error);
        
        process.exit(1);
    }

}