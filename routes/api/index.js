const router = require('express').Router();
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// user routes
router.use('/users', usersRoutes);

// thought routes
router.use('/thoughts', thoughtsRoutes);

module.exports = router;