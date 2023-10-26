const express = require('express');

const router = express.Router();

const adminController = require('../controller/admincon');
// /admin/add-product -> GET
router.get('/add-product' , adminController.getadminController);

// /admin/add-product -> POST
router.post('/add-product', adminController.postadminController);


module.exports = router;