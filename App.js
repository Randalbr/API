const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
var cors = require('cors')


const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use("/api", userRoute)

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening to", port));