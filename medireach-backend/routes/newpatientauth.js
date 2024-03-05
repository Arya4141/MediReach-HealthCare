const express = require("express");
const patientsController = require("../controllers/newpatientController");
const router = express.Router();


router.post("/register", patientsController.newregister);


module.exports = router;
