const router = require("express").Router();
const Order = require("../models/Order");

router.get("/checkout", async (req, res) => {
    if (isLoggedIn()){
        // TODO
    } else {
        // TODO
    }
});

router.post("/checkout", async (req, res) => {
    if (isLoggedIn()){
        // TODO
    } else {
        // TODO
    }
});

module.exports = router;