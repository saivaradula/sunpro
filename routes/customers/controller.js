var express = require("express");
var router = express.Router();
var model = require("./model");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Welcome to customer path... " });
});

router.get("/list", getCustomerList);

module.exports = router;

function getCustomerList(req, res, next) {
    return model.getAll().then(r => {
        res.json(JSON.parse(r));
    });
}