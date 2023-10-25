const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const contactRoutes = require('./routes/contact.js');
const successRoutes = require('./routes/success.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
});

const server = http.createServer(app);

server.listen(3000);