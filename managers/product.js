const modul = require("../module/product");

const showProductsL = (limit, page) => {
  console.log(limit, page);
  return Promise.all([
    modul.showLimitProducts(limit, page),
    modul.showProducts(),
    
  ]);
};

const showProductById = id => {
  return modul.showProductById(id)
}

module.exports = { showProductsL, showProductById };
