// const cors = require('cors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

// load the "secrets" from .env
require('dotenv').config();
require('./config/database.js');

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// if working with API (AJAX), routes go here (before "catch all" route)
app.use(require('./config/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/recipes', require('./routes/api/recipes'))


// catch all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});