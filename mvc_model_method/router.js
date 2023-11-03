//router file

const express=require("express")
const router=express.Router()
const{PostData,GetData,DeleteData}=require("./controller")


router.post("/post",PostData)
router.get("/get",GetData)
// router.put("/update",UpdateData)

router.delete("/delete",DeleteData)

module.exports=router;




