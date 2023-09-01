// NPM Imports
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware for Testing

// CORS Config
app.use(cors());

// morgan
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Imports
const listItemRoutes = require("./routes/listItemRoutes");

// Route Config
app.use("/listItems", listItemRoutes);

app.get("/", (req, res) => {
    res.send("I AM ROOT");
});

app.listen(process.env.PORT, () => {
    console.log("App is running on port", process.env.PORT);
});