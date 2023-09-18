//express web server
var cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes/professional');

const port = 8080;

app.use(cors());
app.use('/professional', routes);

app.listen(process.env.PORT || port);
console.log('Web server listening on port ' + (process.env.PORT || port));