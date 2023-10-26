const express = require('express');

const router = express.Router();
const contactuscontroller = require('../controller/contactus');

router.get('/contactus' , contactuscontroller.contactuscontroller);

router.post('/contactus', contactuscontroller.postcontactus);


module.exports = router;