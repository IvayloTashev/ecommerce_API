const dotenv = require("dotenv");
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


const express = require("express");
const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => console.log(err)
);

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})

