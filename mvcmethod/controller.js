
const Schema=require("./module")
const bcrypt=require('bcrypt');


const PostData=async(req,res)=>{
     const data=new Schema({
        ...req.body
     })
     const SaveData=await data.save()
     res.json(SaveData)
    //  console.log(...req.body);
}
const GetData=async(req,res)=>{
    const Datas=await Schema.find({})
    res.json(Datas)
}
const UpdateData=async(req,res)=>{
    const updateData=await Schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json({msg:"update successfully"});
}
const DeleteData=async(req,res)=>{
    const deletedata=await Schema.findByIdAndDelete(req.params.id);
    res.json({msg:"data delete successfully"});
};


 //secret key for JWT
 const secretKey='your-secret-key';//replace with a strong,secret key 


//signup & registration r all in method
 const SignupData=async(req,res)=>{
    const data=new Schema({
         ...req.body,
         Password:bcrypt.hashSync(req.body.Password,10),//hash the password
         //hash the password
    });
    const { Email }=req.body;
    const existingUser=await Schema.findOne({ Email });
    if(existingUser){
        return res.json({error:'Email already exists'});
    }
    await data.save();
    res.json(data);
 };


 //login & sign in r all same in method
const LoginData=async(req,res)=>{
    const{Email,Password}=req.body;
    // find user bu email
    const user =await Schema.findOne({Email});
    if(!user){
        return res.status(400).json({message:'Invalid email'});
    }
  // Check password - make sure to hash the password before checking

  const PasswordMatch=await  bcrypt.compare(Password,user.Password);
  if(!PasswordMatch){
    return res.json({message:'Invalid Password'});
  }
res.json({message:'Login successfully',user,token});
}

module.exports={PostData,GetData,UpdateData,DeleteData,SignupData,LoginData}