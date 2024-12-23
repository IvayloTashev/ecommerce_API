const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router();

//Update user
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASSWORD_SECRET
        ).toString();
    };

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );
        res.status(200).json(updatedUser);

    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete user
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")

    } catch (err) {
        res.status(500).json(err);
    }

});

//Get user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;