const express = require("express");
const router = express.Router();
const recepieRouter = require('./recepie');

router.use('/recepie', recepieRouter);

module.exports = router;