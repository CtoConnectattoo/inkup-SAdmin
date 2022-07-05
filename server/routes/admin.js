var express = require("express");
var router = express.Router();
var adminController = require("../controllers/adminControllers");

//1.- Crea administrador
//localhost:4000/admin/createAdmin
//------------------------------------------
router.post("/createAdmin", adminController.createAdmin);

//2.- login administrador
//localhost:4000/admin/login
//---------------------------
router.post("/login", adminController.login);


module.exports = router;
