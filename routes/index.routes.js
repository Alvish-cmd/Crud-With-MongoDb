const express = require('express');
const { check, body } = require('express-validator');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const Userdb = require('../models/model');

/* GET home page. */
router.get('/', indexController.list)

router.get('/adduser', indexController.getAddUser);

router.post('/adduser', indexController.create);

router.get('/update-user', indexController.editUser);

router.post('/update-user', indexController.update);

router.get('/delete-user', indexController.delete);

module.exports = router;
