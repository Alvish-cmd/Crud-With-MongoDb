const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');

/* GET home page. */

// add user
router.get('/', indexController.list)

router.get('/adduser', indexController.getAddUser);

router.post('/adduser', indexController.create);

router.get('/update-user', indexController.editUser);

router.post('/update-user', indexController.update);

router.get('/delete-user', indexController.delete);

// service router
router.get('/serviceList', indexController.serviceList)

router.get('/service', indexController.serviceAdd)

router.post('/service', indexController.serviceCreate);

router.get('/update-service', indexController.serviceEdit);

router.post('/update-service', indexController.updateService);

router.get('/delete-service', indexController.deleteService);


module.exports = router;
