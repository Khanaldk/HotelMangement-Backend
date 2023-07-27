const multer=require('multer');

const imageFilter=async(req,file,cb)=>{
    if(file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|svg)$/)){
        cb(null,true)
    }else{
        cb(new Error('Not valid file'),false)
    }
}

const storage=multer.diskStorage({
    destination:async(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:async(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const imageUpload={};

imageUpload.singleImage=multer({
    fileFilter:imageFilter,
    storage,
    limits:{
        fileSize:2024*2024*2024
    }
    
})

module.exports=imageUpload