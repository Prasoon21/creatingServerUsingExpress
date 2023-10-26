const path = require('path');
const rootDir = require('../helpers/path');

exports.getadminController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postadminController = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
};