const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const collectionRoutes = require('./collection-routes');

router.use('/', homeRoutes);
router.use('/collection', collectionRoutes);
router.use('/api', apiRoutes);

module.exports = router;
