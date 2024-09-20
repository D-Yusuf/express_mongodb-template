const express = require('express');
const path = require("path")
const app = express();
const connectDb = require('./database');
const morgan = require('morgan');
const notFoundHandler = require('./middleware/notFoundHandler');
const errorHandler = require('./middleware/errorHandler');
require("dotenv").config()
connectDb();
app.use(express.json());
app.use(morgan("dev"))


app.use('/api/<path>', "<routes>");
app.use("/<images folder>", express.static(path.join(__dirname, "/<images folder>")))

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
