const models=require("../models");

const {Hotel}=require('../models');

class hotelController
{
    static createHotel=async(req,res)=>{
        const hotelSample={
            hotelName:req.body.hotelName,
            address:req.body.address,
            description:req.body.description,
            openingTime:req.body.openingTime,
            clossingTime:req.body.clossingTime
        }
        const createdSample=await Hotel.create(hotelSample);
        if(createdSample){
            return res.status(200).json({
                message:"Hotel created successfully!!",
                hotel:hotelSample
            })
        }
        return res.status(500).json({
            error:"Something went wrong!!"
        })
    }

    static getAllHotel=async(req,res)=>{
        const hotel=await Hotel.findAll();
        if(hotel){
            return res.status(200).json({
                message:"Retrieved all Hotel!",
                Hotels:hotel
            })
        }
    }

    static getHotelById=async(req,res)=>{
        const id=req.params.id;

        const hotel=await Hotel.findOne({where:{id:id}});
        if(hotel){
            return res.status(200).json({
                message:"Retrieved the hotel!",
                hotel:hotel
            })
        }
        return res.status(500).json({
            message:"Invalid Id!"
        })
    }

    static updateHotelById=async(req,res)=>{
        const id=req.params.id;

        const checkId=await Hotel.findOne({where:{id:id}});
        if(!checkId){
            return res.status(500).json({
                message:"Invalid Id!"
            })
        }
        const hotel={
            hotelName:req.body.hotelName,
            address:req.body.address,
            description:req.body.description,
            openingTime:req.body.openingTime,
            clossingTime:req.body.clossingTime
        }
        const updateHotel=await Hotel.update(hotel,{where:{id:id}});
        if(updateHotel){
            return res.status(200).json({
                message:"Hotel updated successfully!!",
                hotel:hotel
            })
        }
    }

    static deleteHotelById=async(req,res)=>{
        const id=req.params.id;

        const checkId=await Hotel.findOne({where:{id:id}});
        if(!checkId){
            return res.status(500).json({
                message:"Invalid Id"
            })
        }
        const hotel=await Hotel.destroy({where:{id:id}});
        if(hotel){
            return res.status(200).json({
                message:"Hotel deleted successfully!!"
            })
        }
    }
}


module.exports=hotelController