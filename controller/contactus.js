const path = require('path');
const rootDir = require('../helpers/path');


exports.contactuscontroller = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};

exports.postcontactus = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};

