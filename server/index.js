const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const userRoutes = require("./routes/userRoute.js");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once("open", () => console.log("Connected"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is on port ${process.env.PORT || 4000}`);
});

app.use("/users", userRoutes);