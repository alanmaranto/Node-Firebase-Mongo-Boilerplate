const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require("./routes");
const { config } = require("./config");

const app = express();
const server = require("http").Server(app);

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "token, Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, x-chat-id, X-ACCESS"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
};

// middlewares
app.use(morgan('dev'));
// app.use(cors());
app.use(allowCrossDomain);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())

// routes
routes(app)

async function main() {
  await server.listen(config.PORT);
  console.log(`Server listening on port ${config.PORT}`);
}

main();
