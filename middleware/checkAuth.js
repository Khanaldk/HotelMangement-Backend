const jwt=require('jsonwebtoken');

const checkAuth={}

checkAuth.loginTokenVerification=async(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.status(402).json({
            message:"Token not found!!"
        })
    }
    const decodedToken=token.split(' ')[1];
    console.log(decodedToken)
    const accessToken=await jwt.sign(decodedToken,process.env.JWT_SECRET_TOKEN);
    if(!accessToken){
        return res.status(400).json({
            message:"Failed to authenticate"
        })
    }
    next();

}

module.exports=checkAuth