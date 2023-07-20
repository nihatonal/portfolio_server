const express = require("express");

const usersController = require("../controllers/users-controllers");

const router = express.Router();

router.post("/sendmail", usersController.send_mail);


module.exports = router;
