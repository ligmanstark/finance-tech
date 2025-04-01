const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

// Protected routes
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Profile data',
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role
    }
  });
});

// Admin only routes
router.get('/users', verifyToken, checkRole('admin'), authController.getAllUsers);
router.patch('/users/:userId/role', verifyToken, checkRole('admin'), authController.updateUserRole);

module.exports = router;
