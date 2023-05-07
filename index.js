const express = require('express');
const app = express();
const path = require('path');


// setting up static path for public folder (always use this after configuring router)
// const publicPath = path.join(__dirname, "../public");
const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/home", (req, res) => {
    res.render("home");
})

app.listen(8000);