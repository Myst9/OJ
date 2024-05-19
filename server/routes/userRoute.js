const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../auth");

router.post("/checkEmail", (req,res) => {
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
});

router.post("/register", (req,res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
});

router.post("/login", (req,res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
});

router.get("/:userId/details", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);
	//console.log(userData); 
	userController.getProfile({ userId: userData.id }).then(resultFromController => res.send(resultFromController));
});

module.exports = router;