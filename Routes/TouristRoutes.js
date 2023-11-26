const express = require("express")
const tourcontroler = require ("../controler/TourControl")
const { validateTouristSignup,validateTouristLogin } =require("../middleware/validattion")
const router =express.Router()

router.post("/signup",tourcontroler.touristSignup)
router.post("/login",tourcontroler.touristLogin)




module.exports = router