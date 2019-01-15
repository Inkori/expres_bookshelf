var express = require("express");
var router = express.Router();

const { getConection } = require("../lib/db");
// const { products } = require("../db.json");
const db = getConection();

router.get("/test", function(req, res, next) {
  // let productsArraySlice;
  // if (req.query._page && req.query._limit) {
  //   productsArraySlice = products.slice(
  //     (req.query._page - 1) * req.query._limit,
  //     req.query._limit * req.query._page
  //   );
  // }
  // console.log("asdasdasdas----------d", db);

  
  console.log("PAGEEEEEEEEEEEEEEEE---", req.query._page);
  const data = db.any("select * from product where id = 1")
    .then(data => {

			return data
			
    })
    .catch(e => next(e));
    // console.log("-----------------------------------", data);
  return db;

	
  res.json(productsArraySlice);
});