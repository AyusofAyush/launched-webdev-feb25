// app.js
const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");

const app = express();
const PORT = 4000;

mongoose.connect("mongodb://localhost:27017/mvc_express_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// setting up the templeting engine to EJS
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base APIs to know if the server is up
app.get("/", (req, res) => {
  res.send('<h1>Welcome to Wikipedia!</h1>');
});

app.use("/articles", articleRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
