const express = require('express');
const path = require("path")
const app = express();
const connectDb = require('./database');
const morgan = require('morgan');
const cors = require("cors")
const notFoundHandler = require('./middleware/notFoundHandler');
const errorHandler = require('./middleware/errorHandler');
require("dotenv").config()
connectDb();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))


app.use('/api/<path>', "<routes>");

// use if u want to see images in browser-> localhost:PORT/media/...imgUrl
// app.use("media", express.static(path.join(__dirname, "/media")))

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
