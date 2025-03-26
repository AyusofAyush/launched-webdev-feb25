const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/profile', authController.isAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

module.exports = router;
