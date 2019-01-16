// const pgp = require("pg-promise")();

// let db = false;

// const getConection = () => {
//   const conection = "postgres://postgres:asderty@localhost:5432/Khocholava";
//   if (!db) {
//     db = pgp(conection);
//   }
//   return db;
// };
// module.exports = { getConection };

var knex = require('knex')({
  client: 'pg',
  connection: "postgres://postgres:asderty@localhost:5432/Khocholava"
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('pagination')

var Phones = bookshelf.Model.extend({
  tableName: 'product',
});

module.exports = Phones;
