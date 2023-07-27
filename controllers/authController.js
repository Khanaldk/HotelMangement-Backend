const models=require('../models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const {User}=require('../models')

class authController
{
    static login=async(req,res)=>{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Email or password required!!"
            })
        }

        const userdata=await User.findOne({where:{email:email}});
        if(!userdata){
            return res.status(402).json({
                message:"You arenot a registered User!!"
            })
        }
        const checkpassword=await bcrypt.compare(password,userdata.password)
        if(checkpassword && email==userdata.email){
            const token=await jwt.sign({id:userdata.id},process.env.JWT_SECRET_TOKEN,{expiresIn:'2d'})
            if(token){
                return res.status(200).json({
                    message:"Login successfully!!",
                    token:token
                })
            }
            return res.status(403).json({
                message:"Invalid email or password!!"
            })
        }
    }
}

module.exports=authController