const express = require("express"); //import the package into the file
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();

//Import Routes
const getRoutes = require("./routes/gets");
const postRoutes = require("./routes/posts");
const putRoutes = require("./routes/puts");
const deleteRoutes = require("./routes/deletes");

//Middlewares
app.use(cors());
//CORS allows you to load resources from different origins

//ROUTES
app.use("/api/words", getRoutes);
app.use("/add", postRoutes);
app.use("/add", putRoutes);
app.use("/words", deleteRoutes);

//Start listening to the server
module.exports.handler = serverless(app);
