const models=require('../models');
const bcrypt=require('bcrypt');

const {User}=require('../models');

class userController
{
    static createUser=async(req,res)=>{
        const password=req.body.password;
        const hashpassword=await bcrypt.hash(password,11);
        const userValue={
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:hashpassword,
            age:req.body.age,
            gender:req.body.gender,
            phoneNo:req.body.phoneNo,
            userStatus:req.body.userStatus
        }

        const userDetails=await User.create(userValue);
        if(userDetails){
            return res.status(200).json({
                message:"User created!",
                user:userValue
            })
        }
    }

    static getAllUser=async(req,res)=>{
        const user=await User.findAll();
        if(user){
            return res.status(200).json({
                message:'Retrieved all User!',
                User:user
            })
        }
    }

    // static getUserById=async(req,res)=>{
    //     const id=req.params.id;
    //     const user=await User.findOne({where:{id:id}});
    //     if(user){
    //         return res.status(200).json({
    //             message:"Retrieved the user!",
    //             user:user
    //         })
    //     }
    //     return res.status(500).json({
    //         message:"No any information!!"
    //     })
    // }

    static updateUserById=async(req,res)=>{
        const id=req.params.id;
        const checkId=await User.findOne({where:{id:id}});
        if(!checkId){
            return res.status(500).json({
                message:"Invalid Id!"
            })
        }
        const password=req.body.password;
        const hashpassword=await bcrypt.hash(password,11);
        const userValue={
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:hashpassword,
            age:req.body.age,
            gender:req.body.gender,
            phoneNo:req.body.phoneNo,
            userStatus:req.body.userStatus
        }

        const updatedUser=await User.update(userValue,{where:{id:id}});
        if(updatedUser){
            return res.status(200).json({
                message:"User updated successfully!!",
                User:userValue
            })
        }
    }

    static findByAlphabets=async(req,res)=>{
        const alphabet=req.query.alphabet;
        console.log(alphabet)
        const findName=await User.findAll({where:{fname:alphabet}});
        if(findName){
            return res.status(200).json({
                message:"Retrieved name!",
                name:findName
            })
        }
        return res.status(500).json({
            message:"Name not found!"
        })

    }

    static deleteUserById=async(req,res)=>{
        const id=req.params.id;
        const checkId=await User.findOne({where:{id:id}});
        if(!checkId){
            return res.status(500).json({
                message:"invalid Id!"
            })
        }
        const user=await User.destroy({where:{id:id}});
        if(user){
            return res.status(200).json({
                message:"User deleted Successfully!!"
            })
        }
    }
}

module.exports=userController