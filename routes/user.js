const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController");
// const user = require("../models/user");
const multer=require("../config/multer")

router.get("/",userController.renderForm)
router.post("/create",  multer.single('user_image'),userController.createUser)
router.get("/details/:id",userController.getUserDetail)
router.get("/image/:id",userController.getUserImage)
router.put("/update/:user_id",userController.updateUserDetail)
router.delete("/delete/:user_id",userController.deleteUserDetail)

module.exports=router;