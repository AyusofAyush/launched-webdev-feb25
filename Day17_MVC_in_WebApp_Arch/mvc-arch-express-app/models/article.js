// models/article.js
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
