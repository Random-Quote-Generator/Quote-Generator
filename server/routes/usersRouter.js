const express = require('express');
const { AddUser } = require('../controllers/usersControllers');
const router = express.Router();

router.post('/Add', AddUser);

module.exports = router;
