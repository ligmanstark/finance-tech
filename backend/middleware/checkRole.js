const checkRole = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!req.user.hasRole(role)) {
      return res.status(403).json({ 
        message: 'Forbidden: Insufficient permissions' 
      });
    }

    next();
  };
};

module.exports = checkRole; 