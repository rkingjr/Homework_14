const router = require('express').Router();

const usersRoutes = require('./users-routes.js');
const postsRoutes = require('./posts-routes.js');
const commentsRoutes = require('./comments-routes.js');

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
