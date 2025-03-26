const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.redirect('/login');
  } catch (error) {
    res.status(400).render('register', { error: error.message || 'An error occurred' });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body.username, req.body.password);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/profile');
  } catch (error) {
    res.status(400).render('login', { error: error.message || 'An error occurred' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error('Not authenticated');
    
    const decoded = authService.verifyToken(token);
    req.user = await authService.getUserById(decoded.id);  // Ensure this gets user data
    next();
  } catch (error) {
    res.redirect('/login');
  }
};
