const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

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

        if (err.code === 11000) {
            return res.status(409).json({ message: "Username or Email already exists" });
        };

        return res.status(500).json({ message: "Server error" });
    };
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json("Wrong email or password")
        };

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        const originalPass = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPass !== req.body.password) {
            return res.status(401).json("Wrong email or password")
        };

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET,
            { expiresIn: "2d" }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });

    } catch (err) {
        return res.status(500).json("Server error");
    }
})

module.exports = router;