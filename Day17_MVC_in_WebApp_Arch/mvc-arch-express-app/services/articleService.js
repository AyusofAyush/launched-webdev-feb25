const Article = require('../models/article');

const getAllArticles = async () => {
  return await Article.find();
};

const getArticleById = async (id) => {
  return await Article.findById(id);
};

const createArticle = async (articleData) => {
  const article = new Article(articleData);
  return await article.save();
};

const updateArticle = async (id, articleData) => {
  const article = await Article.findById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  Object.assign(article, articleData);
  return await article.save();
};

const deleteArticle = async (id) => {
  const article = await Article.findById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  return await article.deleteOne();
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
