var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var prodMod = require('./routes/prodMod')
// var testRouter = require("./routes/test");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use("/assets", express.static(path.join(__dirname, "public")));

// app.use("/test/1", testRouter);
app.use("/api", productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
