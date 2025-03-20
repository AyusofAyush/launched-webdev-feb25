// routes/articles.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getArticleList); // www.<domain.com>/api/article
router.get('/:id', articleController.getArticleDetail); // www.<domain.com>/api/article/1
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
