const models=require('../models');

const {Order}=require('../models');

class OrderController
{
    static createOrder=async(req,res)=>{
        const order={
            dishName:req.body.dishName,
            cost:req.body.cost,
            quantity:req.body.quantity,
            tableId:req.body.tableId
        }
        const deliverOrder=await Order.create(order);
        if(deliverOrder){
            return res.status(200).json({
                message:"Ordered created successfully!!",
                ordered:order
            })
        }
    }

    static getAllOrder=async(req,res)=>{
        const order=await Order.findAll({
            order:[["id","DESC"]]
        });
        if(order){
            return res.status(200).json({
                message:"Retrieved all ordered!!",
                Ordered:order
            })
        }
    }

    static getAllOrderByTableId=async(req,res)=>{
        const tableId=req.query.tableId;
        console.log(tableId)
        const order=await Order.findAll({where:{tableId:tableId}});
        if(order){
            return res.status(200).json({
                message:"Retrieved all Table ordered!",
                order:order
            })
        }

    }
    static updateOrderById=async(req,res)=>{
        const id=req.params.id;
        const check=await Order.findOne({where:{id:id}});
        if(!check){
            return res.status(502).json({
                message:"Invalid Id!"
            })
        }
        const updateOrder={
            dishName:req.body.dishName,
            cost:req.body.cost,
            quantity:req.body.quantity,
            tableId:req.body.tableId
        }
        const order=await Order.update(updateOrder,{where:{id:id}});
        if(order){
            return res.status(200).json({
                message:"Order updated successfully!!",
                updateOrder:updateOrder
            })
        }
    }

    static deleteOrderById=async(req,res)=>{
        const id=req.params.id;
        const check=await Order.findOne({where:{id:id}});
        if(!check){
            return res.status(502).json({
                message:"Invalid Id!"
            })
        }
        const order=await Order.destroy({where:{id:id}});
        if(order){
            return res.status(200).json({
                message:"Order deleted successfully!!"
            })
        }
    }
}

module.exports=OrderController