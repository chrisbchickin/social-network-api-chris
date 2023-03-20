const router = require('express').Router();


// Importing api routes 
const apiRoutes = require('./api');

//api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>Error</h1>');
  });

module.exports = router;
