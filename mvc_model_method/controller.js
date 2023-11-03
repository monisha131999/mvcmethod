//controller file 

const Schema=require("./module")
const PostData=async(req,res)=>{
    const data=new Schema({
        ...req.body
    })
    const SaveData=await data.save()
    res.json(SaveData)
    console.log(...req.body);
}
const GetData=async(req,res)=>{
    const Datas=await Schema.find({})
    res.json(Datas)
}
const UpdateData=async(req,res)=>{
    const updatedata=await 
    Schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json ({msg:"update successfully"});
}
const DeleteData=async(req,res)=>{
    const deletedata=await Schema.findByIdAndUpdate(req.params.id);
    res.json({msg:"data delete successfully"});
}
module.exports={PostData,GetData,UpdateData,DeleteData}
