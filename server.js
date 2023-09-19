//express web server
var cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes/professional');
//require the mongoDb file that has the connection to MongoDB
const mongodb = require('./db/connect');

//change the port 8080 to support the production port
const port = process.env.PORT || 8080;

app.use(cors());

//routes in a separate file to keep the server file lean
app.use('/professional', routes);

app.listen(process.env.PORT || port);
console.log('Web server listening on port ' + (process.env.PORT || port));