var express = require("express");
var router = express.Router();

const productManager = require("../managers/product");
const { getConection } = require("../lib/db");
const db = getConection();
// console.log(productManager.showProductsL());
debugger;
// router.get("./products", function(req, res, next) {

//   console.log(req);
//   console.log("*****************************", req.query);
//   const { _page: page, _limit: limit } = req.query;

//   console.log("router", limit);
//   productManager
//     .showProductsL(limit, page)
//     .then(function(data) {
//       console.log("--------------", data);
//       res.json(data);
//     })
//     .catch(function(err) {
//       next(err);
//     });
//   console.log(productManager.showProductsL());
// });
// console.log(productManager.showProductsL());

router.get("/products", function(req, res, next) {
  console.log("PAGEEEEEEEEEEEEEEEE---", req.query._limit);
  const { _page: page, _limit: limit } = req.query;
  productManager
    .showProductsL(limit, page)
    .then(function(data) {
      console.log("--------------", data[0]);
      res.json(data[0]);
    })
    .catch(function(err) {
      next(err);
    });
});
router.get("/products/:id", function(req, res, next) {
  productManager
    .showProductById(id)
    .then(function(data) {
      data;
      res.json(data);
    })
    .catch(function(err) {
      next(err);
    });
});

// router.get("/products", function(req, res, next) {
//   console.log("PAGEEEEEEEEEEEEEEEE---", req.query._limit);
//   db.any("SELECT * FROM product")
//     .then(function(data) {
//       const { _page: page = 1, _limit: limit = 6 } = req.query;
//       // const page = _page.req.query;
//       // const limit = _limit.req.query;
//       const sliceArr = data.slice((page - 1) * limit, limit * page);
//       res.send(sliceArr);
//     })
//     .catch(function(err) {
//       next(err);
//     });
// });

// router.get("/products/:id", function(req, res, next) {
//   db.one(`SELECT * FROM product WHERE "id" = ${req.param("id")}`)
//     .then(function(data) {
//       data;
//       res.send(data);
//     })
//     .catch(function(err) {
//       next(err);
//     });
// });

// router.get("/formAdd", function(req, res, next) {
//   db.one(
//     `INSERT INTO "public"."product" ( "battery", "camera", "categoryId", "cpu", "description",
//     "display", "id", "img", "memory", "name", "price", "size", "weight") VALUES
//     ( ${req.body.battery}, ${req.body.camera}, ${req.body.categoryId}, ${
//       req.body.cpu
//     },
//       ${req.body.description}, ${req.body.display}, ${req.body.id}, ${
//       req.body.img
//     }, ${req.body.memory},
//       ${req.body.name}, ${req.body.price}, ${req.body.size}, ${
//       req.body.weight
//     } )`
//   );
//   // .then(function(data) {
//   //   data;
//   //   res.send(data);
//   // })
//   // .catch(function(err) {
//   //   next(err);
//   // });
// });

module.exports = router;
