const express = require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const app = express();
const path = require("path");
// const userRoutes = require("./routes/api/users")
const PORT = process.env.PORT || 3001


// connect to database
connectDB()

// init middleware
app.use(express.json())
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// routes 
app.use("/api/users", require("./routes/api/users"))
app.use("/api/events", require("./routes/api/events"))


// serve frontend 


// serve static a in production
if (process.env.NODE_ENV === "production")
{
    // set build folder as static
    app.use(express.static(path.join(__dirname, "../frontend/build")))

    app.get("*", (req, res) => (
        res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
    ))
} else
{
    app.get("/", (req, res) => {
        res.status(200).json({ message: "Welcome to Run Fit" })
    })
}
// start the server
// app.listen(() => {
//     console.log(`App listening on port ${PORT}`)
// })
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));