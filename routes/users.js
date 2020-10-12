const express = require('express');
const router = express.Roputer();
const usersCtrl = require('../../controllers/user');

// Public Routes
router.post('/signup', usersCtrl.signup);
// router.post('/login', userCtrl.login);


// Protected Routes





module.exports = router;