const pgp = require("pg-promise")();

let db = false;

const getConection = () => {
  const conection = "postgres://postgres:asderty@localhost:5432/Khocholava";
  if (!db) {
    db = pgp(conection);
  }
  return db;
};
module.exports = { getConection };
