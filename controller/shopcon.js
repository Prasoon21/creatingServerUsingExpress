const path = require('path');
const rootDir = require('../helpers/path');

exports.getshopController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

