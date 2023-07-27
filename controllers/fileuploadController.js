const models=require('../models');
const path=require('path');
const {Fileupload}=require('../models');

class FileuploadController
{
    static uploadImage=async(req,res,file)=>{
        if(!req.file){
            return res.status(402).json({
                message:"First choose the image!"
            })
        }
        const imagefile={
            filename:req.file.filename,
            mimetype:req.file.mimetype,
            filesize:req.file.size,
            extension:path.extname(req.file.originalname)
        }
        const fileupload=await Fileupload.create(imagefile);
        if(fileupload){
            return res.status(200).json({
                message:"Fileuploaded successfully!",
                file:imagefile
            })
        }
    }
}

module.exports=FileuploadController