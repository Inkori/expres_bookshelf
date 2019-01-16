// const { getConection } = require("../lib/db");
// const db = getConection();

const phones = [
  "battery",
  "camera",
  "categoryId",
  "cpu",
  "description",
  "display",
  "id",
  "img",
  "memory",
  "name",
  "price",
  "size",
  "weight"
];

const Phones = require("../lib/db");

const showProducts = () => {
  Phones.count("id");
};
const showLimitProducts = (limit, page) => {
  return Phones.query("orderBy", "id", "ASC").fetchPage({
    pageLimit: limit,
    page: page
  });
};
const showProductById = id => {
  return Phones.where("id", id).fetch();
};

const postNew = product => {
  console.log("module---", product);
  return Phones.forge(product).save();
};

const onUpdate = product => {
  return Phones.where("id", product.id).save(product, { method: "update" });
};
// const showProducts = () => {
//   const product = "SELECT COUNT(id) FROM product";
//   return db.one(product);
// };

// const showLimitProducts = (limit, page) => {
//   const products = `SELECT * FROM product ORDER BY id LIMIT ${limit} OFFSET ${(page -
//     1) *
//     limit} `;
//   return db.any(products);
// };

// const postNew = query => {
//   const fields = phones.join('","');
//   const value = yachtsHeader.map(fieldName => query[fieldName]);
//   const SQLquery = `INSERT INTO product ("${fields}") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
//   return bd.none(SQLquery, ...value);
// };

module.exports = {
  showProducts,
  showLimitProducts,
  showProductById,
  postNew,
  onUpdate
};
