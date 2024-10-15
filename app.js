// Importing express module
const express = require("express")
const path = require("path") // for handling file paths
const app = express()

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")))

// Handling GET / request
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html")) // serve index.html
})

// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})
