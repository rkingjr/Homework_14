const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./collection-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', collectionRoutes);
router.use('/api', apiRoutes);

module.exports = router;
