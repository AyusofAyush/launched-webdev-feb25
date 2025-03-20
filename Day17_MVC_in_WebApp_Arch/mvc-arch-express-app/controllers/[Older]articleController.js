// controllers/articleController.js - controller + service together
const Article = require("../models/article");

exports.getArticleList = async (req, res) => {
  try {
    const articles = await Article.find();
    res.render("articles/index", { articles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getArticleDetail = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: "Cannot find article" });
    }
    res.render("articles/show", { article });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArticle = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: "Cannot find article" });
    }

    if (req.body.title != null) {
      article.title = req.body.title;
    }
    if (req.body.content != null) {
      article.content = req.body.content;
    }

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: "Cannot find article" });
    }

    await article.remove();
    res.json({ message: "Deleted article" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
