const router = require("express").Router();
const User = require("../models/User");


//register
router.post("/register", 
    

});

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            res.status(401).json("Wrong credentials!");
            return;
        }
        const userpassword = crypto.createHash('md5').update(user.password).digest('hex')
        if (userpassword !== user.password){
            res.status(401).json("Wrong credentials!");
            return;
        }
        const {password, ...others} = user._doc;
        req.session.user = req.body.username
        res.status(200).json(others);
        return;
    }catch(err){
        res.status(500).json(err);
        return;
    }
});

router.get("/logout", (req,res) => {
    req.session.destroy()
    res.redirect("/")
});

router.get('/', (req, res) => {
    //TODO
});

module.exports = router;

// - Check if logged in
function isLoggedIn(req){
    if (req.session.userId === "" || typeof req.session.userId === 'undefined'){
        return false;
    }
    return true;
}

// - Merge shopping cart when login
async function mergeCart(req, res){
    const tempCart = await Cart.findOne({userId: req.session.id});
    const onlineCart = await Cart.findOne({userId: req.session.name});
    var tempProducts = tempCart.products;
    var onlineProducts = onlineCart.products;

    for (var item in onlineProducts){
        tempCart.push(item);
    }
    req.session.cart = tempCart.length;

    await Cart.findOneAndUpdate({userId: req.session.name},{products: tempProducts});
    await Cart.findOneAndDelete({userId: req.session.id});
}

// register account function
async register(req,res) {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypto.createHash('md5').update(req.body.password).digest('hex')
    });
    const user = await User.findOne({username: req.body.username});
    if (!user) {
        try{
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }catch(err){
            res.status(500).json(err);
        }
    } else {
        //TODO
        // Duplicate userID
        res.status(504).json(err);
    }
}
