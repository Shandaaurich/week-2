const express = require('express');
const controller = require('../controllers/professional');

const router = express.Router();

//if we hit this route: localhost:8080/professional/, then call a funtion in the controller folder (professional is the url)
router.get('/', controller.getData);

module.exports = router;
