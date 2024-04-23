const express = require("express"); //import the package into the file
const cors = require("cors");
const app = express();

//Import Routes
const getRoutes = require("./routes/gets");
const getpost = require("./routes/posts");

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/words", getRoutes);
app.use("/add", getpost);
//CORS allows you to load resources from different origins
//ROUTES

//Start listening to the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
