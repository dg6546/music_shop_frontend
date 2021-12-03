const router = require("express").Router();
const User = require("../models/User");


//register
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }

});

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            res.status(401).json("Wrong credentials!");
            return;
        }
        const userpassword = user.password
        if (userpassword !== req.body.password){
            res.status(401).json("Wrong credentials!");
            return;
        }
        const {password, ...others} = user._doc;
        res.status(200).json(others);
        return;
    }catch(err){
        res.status(500).json(err);
        return;
    }
});

module.exports = router;