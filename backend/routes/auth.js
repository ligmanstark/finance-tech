const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken, checkRole } = require('../middleware/auth');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

// Protected routes
router.get('/profile', verifyToken, authController.getProfile);

// Admin routes
router.get('/users', verifyToken, checkRole(['admin']), authController.getAllUsers);
router.patch('/users/:userId/role', verifyToken, checkRole(['admin']), authController.updateUserRole);

module.exports = router; 