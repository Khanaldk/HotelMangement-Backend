const express=require('express');

const authRoutes = require('./authRoutes');
const hotelRoutes=require("../routes/hotelRoutes");
const userRoutes = require('./userRoutes');
const fileuploadRoutes = require('./fileuplodRoutes');
const workerRoutes = require('./workerRoutes');
const OrderRoutes = require('./orderRoutes');

const routes=express.Router();

routes.use('/auth',authRoutes);
routes.use('/hotel',hotelRoutes);
routes.use('/user',userRoutes);
routes.use('/fileupload',fileuploadRoutes);
routes.use('/worker',workerRoutes);
routes.use('/order',OrderRoutes);


module.exports=routes