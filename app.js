var express = require("express");
var createError = require("http-errors");

// routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// request parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json(err);
});

app.listen(3000);
