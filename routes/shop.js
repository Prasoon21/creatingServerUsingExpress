const express = require('express');

const router = express.Router();

const shopController = require('../controller/shopcon')

router.get('/' , shopController.getshopController);

module.exports = router;