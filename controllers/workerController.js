const models=require('../models');

const {worker,User,Fileupload}=require('../models');

class workerController
{
    static createWorker=async(req,res)=>{
        const workerdetails={
            userId:req.body.userId,
            imageId:req.body.imageId
        }
        const details=await worker.create(workerdetails);
        if(details){
            return res.status(200).json({
                message:"Worker created successfully",
                worker:workerdetails
            })
        }
    }

    static getAllWorker=async(req,res)=>{
        const workerdetails=await worker.findAll();
        if(worker){
            return res.status(200).json({
                message:"Retrieved all worker!",
                worker:workerdetails
            })
        }
    }
    static getWorkerById=async(req,res)=>{
        const id=req.params.id;
        const workerdetails=await worker.findOne({
            include:[
                {
                    model:User,
                    as:"user"
                },
                {
                    model:Fileupload,
                    as:"image",
                    attributes:['filename']
                },
            ],
            where:{id:id}});
        if(workerdetails){
            return res.status(200).json({
                message:"Retrieved a worker details!",
                worker:workerdetails
            })
        }
        return res.status(500).json({
            message:"Invalid Id! No any information!"
        })
    }

    static updateWorkerById=async(req,res)=>{
        const id=req.params.id;
        const check=await worker.findOne({where:{id:id}});
        if(!check){
            return res.status(402).json({
                message:"Invalid Id!"
            })
        }
        const details={
            userId:req.body.userId,
            imageId:req.body.imageId
        }
        const workerUpdate=await worker.update(details,{where:{id:id}});
        if(workerUpdate){
            return res.status(200).json({
                message:"Worker updated successfully!",
                worker:details
            })
        }
    }

    static deleteWorkerById=async(req,res)=>{
        const id=req.params.id;
        const check=await worker.findOne({where:{id:id}})
            if(!check){
                return res.status(502).json({
                    message:"Invalid Id!"
                })
            }
            const deleteworker=await worker.destroy({where:{id:id}});
            if(deleteworker){
                return res.status(200).json({
                    message:"Worker deleted successfully!!"
                })
            }
        }
    }


module.exports=workerController