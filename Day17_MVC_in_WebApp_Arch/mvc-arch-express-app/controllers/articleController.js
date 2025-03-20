const articleService = require('../services/articleService');

exports.getArticleList = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.render('articles/index', { articles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getArticleDetail = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Cannot find article' });
    }
    res.render('articles/show', { article });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const newArticle = await articleService.createArticle({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await articleService.updateArticle(req.params.id, {
      title: req.body.title,
      content: req.body.content,
    });
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await articleService.deleteArticle(req.params.id);
    res.json({ message: 'Deleted article' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
