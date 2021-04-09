const router = require('express').Router();
const { Homepage, Dashboard, Login } = require('../models');
const withAuth = require('../utils/auth');

//get Homepage
router.get('/', async (req, res) => {
    //get all posts
    res.render('all');
});

//get Dashboard
// Use withAuth middleware to prevent access to route

//get Login
//// Use withAuth middleware to prevent access to route


module.exports = router;
