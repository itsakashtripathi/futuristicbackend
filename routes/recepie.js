const express = require("express");
const router = express.Router();
const recepieController = require('../controllers/recepie');
const recepieValidator = require('../middlewares/validators/recepieValidator');

router.post('/', recepieValidator.createRecepieSchemaValidate, recepieController.createRecepie);

module.exports = router;