const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI")

const connectDB = async () => {
    console.log("herrrrre", process.env.NODE_ENV)
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URI || process.env.NODE_ENV)
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (err)
    {
        console.log(err.message)
        // exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB 