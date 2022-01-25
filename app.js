const express = require("express");
const createError = require("http-errors");

// routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const foodRouter = require("./routes/food");

const app = express();

// request parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/food", foodRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json(err);
});

app.listen(process.env.PORT);
