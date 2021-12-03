const router = require("express").Router();
const Cart = require("../models/Cart");

router.get("/cart", async (req,res) => {
    const cart;
    if (!isLoggedIn(req)){
        cart = await Cart.findOne({userId: req.session.id});
    } else {
        cart = await Cart.findOne({userId: req.session.username});
    }
    req.session.cart = cart.products.length;
    
});

module.exports = router;

// - Cart count add
function cartAdd(req){
    if (req.session.cart === 'undefined'){
        req.session.cart = 0;
    }
    req.session.cart += 1;
}

// - Delete item from cart

async function deleteItemFromCart(req, id){
    await Cart.updateOne({userId: req.session.username}, {
        $pull: {
            products: { _id: id}
        }
    })
}