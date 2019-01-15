var express = require("express");
var router = express.Router();

const productManager = require("../managers/product");

router.get("./products", function(req, res, next) {
  debug: true;
  console.log("*****************************", req.query);

  const { _page: page, _limit: limit } = req.query;
  productManager
    .showProductsL(limit, page)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      next(err);
    });
  console.log(productManager.showProductsL());
});

module.exports = router;
