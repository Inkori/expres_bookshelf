const { getConection } = require("../lib/db");
const db = getConection();

const showProducts = () => {
  const test = "SELECT COUNT(*) FROM product";
  console.log(test);
  return db.any(test);
};

const showLimitProducts = (limit, page) => {
  console.log("module", limit, page);
  const test = `SELECT * FROM product ORDER BY id LIMIT ${limit} OFFSET ${(page -
    1) *
    limit} `;
  return db.any(test);
};

const showProductById = id => {
  return db.any(`SELECT * FROM product WHERE "id" = ${id} `)
}

module.exports = { showProducts, showLimitProducts, showProductById };
