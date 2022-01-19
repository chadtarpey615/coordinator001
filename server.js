const express = require("express")
const connectDB = require("./config/db")
const app = express();
const PORT = 5000


// connect to database
connectDB()

// init middleware
app.use(express.json({ extended: false }))




// start the server
app.listen(() => {
    console.log(`App listening on port ${PORT}`)
})