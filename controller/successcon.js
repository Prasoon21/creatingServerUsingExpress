const path = require('path');

const rootDir = require('../helpers/path');

exports.getsuccessController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};