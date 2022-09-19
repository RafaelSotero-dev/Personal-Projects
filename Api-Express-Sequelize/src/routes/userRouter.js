const { findUserAndBookByIdController } = require('../controllers/userController');

const express = require('express').Router;

const router = express();

router.get('/:id', findUserAndBookByIdController);

module.exports = router;