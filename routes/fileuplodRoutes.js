const express=require('express');

const FileuploadController = require('../controllers/fileuploadController');
const imageUpload=require('../middleware/fileuploadMiddleware')

const fileuploadRoutes=express.Router();

/**
 * @swagger
 *  /api/fileupload/image:
 *   post:
 *     summary: Upload a single image
 *     security:
 *       - jwt: []
 *     tags: [FileUpload]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *            type: object
 *            properties:
 *              image:
 *                type: string
 *                format: binary
 *     responses:
 *      200:
 *          description: image Uploaded successfully
 *      500:
 *          description: Some Server Error
*/

fileuploadRoutes.post('/image',(req,res)=>{
    imageUpload.singleImage.single('image')(req,res,(err)=>{
        if(err){
            return res.status(401).json({
                message:err.message
            })
        }
    return FileuploadController.uploadImage(req,res);
    })
})

module.exports=fileuploadRoutes