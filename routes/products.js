var express = require("express");
var router = express.Router();
const productManager = require("../managers/product");

router.get("/products", function(req, res, next) {
  const { _page: page, _limit: limit } = req.query;
  productManager
    .showProductsL(limit, page)
    .then(function(data) {
      res.json(data[0]);
    })
    .catch(function(err) {
      next(err);
    });
});

router.get("/products/:id", (req, res, next) => {
  const id = req.param("id");
  console.log("PHONEEEEEEE", req);
  productManager
    .showProductById(id)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      next(error);
    });
});

router.post("/products/post", function(req, res, next) {
  console.log("BODYBODY", req.body);
  productManager.postNew(req.body).catch(err => next(err));
});

router.patch("/products/update", function(req, res, next) {
  console.log("update ==", req.body);
  productManager.onUpdate(req.body).catch(err => next(err));
});
// console.log(productManager.postNew());
// console.log(router.post("/products/post", function(req, res, next) {
//   console.log("BODYBODY", req.body);
//   const product = req.body;
//   productManager.postNew(product).catch(err => next(err));
// })
// );
// console.log(productManager.onUpdate())
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
