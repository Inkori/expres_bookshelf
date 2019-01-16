const modul = require("../module/product");

// const showProductsL = (limit, page) => {
//   return Promise.all([
//     modul.showLimitProducts(limit, page),
//     modul.showProducts(),

//   ]);
// };
const showProductsL = (limit, page) => {
  return Promise.all([
    modul.showLimitProducts(limit, page),
    modul.showProducts()
  ]);
};
// const showProductsL = (limit, page) => {
//   return modul.showLimitProducts(limit, page);
// };

const showProductById = id => {
  return modul.showProductById(id);
};

const postNew = product => {
  return modul.postNew(product);
};
const onUpdate = product => {
  return modul.onUpdate(product);
};

module.exports = { showProductsL, showProductById, postNew, onUpdate };
