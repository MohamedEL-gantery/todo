"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _errorMiddleware = _interopRequireDefault(require("./middlewares/error.middleware.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _database = _interopRequireDefault(require("./database.js"));

var _cors = _interopRequireDefault(require("cors"));

var _authRoute = _interopRequireDefault(require("./routes/auth.route.js"));

var _todoRoute = _interopRequireDefault(require("./routes/todo.route.js"));

var _userRoute = _interopRequireDefault(require("./routes/user.route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import routes
var app = (0, _express["default"])();
app.enable("trust proxy"); // Enable other domains to access your application

app.use((0, _cors["default"])({
  origin: "http://localhost:5173",
  credentials: true
}));

_dotenv["default"].config({
  path: "./.env"
});

if (process.env.NODE_ENV === "development") {
  app.use((0, _morgan["default"])("dev"));
}

app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use("/api/v1/auths", _authRoute["default"]);
app.use("/api/v1/todos", _todoRoute["default"]);
app.use("/api/v1/users", _userRoute["default"]);
app.use(_errorMiddleware["default"]);
(0, _database["default"])(process.env.BASE_URL);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});