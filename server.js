//express web server
// const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const routes = require('./routes/professional');
//require the mongoDb file that has the connection to MongoDB
const mongodb = require('./db/connect');

//change the port 8080 to support the production port
const port = process.env.PORT || 8080;

// app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//routes in a separate file to keep the server file lean
app.use('/professional', routes);

//connect to MongoDB instance, show error in console or display connected message
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Web server listening on port ' + (port));
    }
});