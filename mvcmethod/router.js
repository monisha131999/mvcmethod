const express=require("express");
const bcrypt=require('bcrypt');

const router=express.Router()

const{PostData,GetData,UpdateData,DeleteData,SignupData,LoginData}=require("./controller")

router.post("/post",PostData)
router.get("/get",GetData)
router.put("/update/:id",UpdateData)
router.delete("/delete/:id",DeleteData)

// sign up &login methods

router.post("/post/signup",SignupData)
router.post("/post/login",LoginData)

module.exports=router;
