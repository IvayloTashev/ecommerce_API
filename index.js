const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://Admin:admin@cluster0.0bhma.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
    ).then(() => console.log("Database connected successfully!")).catch((err) => console.log(err));

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})

