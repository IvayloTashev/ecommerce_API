const dotenv = require("dotenv");
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const express = require("express");
const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => console.log(err)
);

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})

