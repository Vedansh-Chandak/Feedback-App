import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    //check  for connection
    if(connection.isConnected){
        console.log("already connecteed to database");
        return
    }

    try {
      const db = await mongoose.connect(process.env.MONGODB_URI || "")

    connection.isConnected = db.connections[0].readyState;
    console.log("DB connect successfully")
    } catch (error) {
        console.log("ERROR:", error)

        process.exit(1)
    }
}


export default dbConnect;