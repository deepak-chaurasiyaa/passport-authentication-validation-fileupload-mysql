const { Router } = require("express");
const {validateUserEmail,resetpassword} = require("../controllers/password.controller");

const router = require("express").Router();

const {validateBody,schemas} = require("../helpers/bodyValidate/bodyValidation")
router.post("/resetpasswordmail",validateBody(schemas.email_validation), validateUserEmail)
router.post("/resetpassword",validateBody(schemas.password_validation),resetpassword)
module.exports = router;