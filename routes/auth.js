const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//Register 
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({ message: err.message });
        };

        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Username, email, and password are required" });
        };

        if (err.code === 11000) {
            return res.status(409).json({ message: "Username or Email already exists" });
        };

        return res.status(500).json({ message: "Server error" });
    };

});


module.exports = router;