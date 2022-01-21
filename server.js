const express = require("express")
const connectDB = require("./config/db")
const app = express();
const path = require("path");
const userRoutes = require("./routes/api/users")
const PORT = 5000


// connect to database
connectDB()

// init middleware
app.use(express.json({ extended: false }))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// routes 
app.use("/api/users", userRoutes)

// serve static a in production
// if (process.env.NODE_ENV === "production")
// {
//     // set static folder
//     app.use(express.static("client/build"))

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//     })
// }
// start the server

app.listen(5000, () => console.log(`Server running on port ${PORT}!`))