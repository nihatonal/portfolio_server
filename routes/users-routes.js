const express = require("express");

const usersController = require("../controllers/users-controllers");

const router = express.Router();

router.get("/reviews", usersController.get_reviews);
router.get("/getdates", usersController.get_dates);
router.post("/savedates", usersController.save_dates);
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.delete("/:did", usersController.deleteDate);

module.exports = router;
