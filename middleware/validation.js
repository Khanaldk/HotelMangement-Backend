const {check,validationResult}=require('express-validator');

const models=require('../models');

const {Hotel,User,worker,Fileupload}=require("../models");

const validation={};

validation.hotelValidate=[
    check('hotelName')
        .notEmpty().withMessage('hotelName must be required!'),
    check('address')
        .notEmpty().withMessage('address must be required!'),
    check('description')
        .notEmpty().withMessage('description must be required!'),
    check('openingTime')
        .notEmpty().withMessage('openingtime is required!'),
    check('clossingTime')
        .notEmpty().withMessage('clossingtime is required!!'),
    (req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(402).json({
                message:errors.array()
            })
        }
        next();
    }

]

validation.userValidate=[
    check('fname')
        .notEmpty().withMessage('fname must be required!!')
        .isAlpha().withMessage('fname must be alphabets!!')
        .isLength({min:3}).withMessage('fname must have at least 3 character!!'),
    check('lname')
        .notEmpty().withMessage('lname must be required!!')
        .isAlpha().withMessage('lname must be alphabets!!')
        .isLength({min:3}).withMessage('lname must have at least 3 character!!'),
    check('email')
        .notEmpty().withMessage('email must be required!')
        .isEmail().withMessage('email is invalid!')
        .custom(async(value)=>{
            const check=await User.findOne({where:{email:value}});
            if(check){
                throw new Error('Email is already in use!!');
            }
        }),
    check('password')
        .notEmpty().withMessage('password is required!')
        .isLength({min:5}).withMessage('password must have at least 5 character!!') ,
    check('age')
        .notEmpty().withMessage('age must be required!!')
        .isInt().withMessage('age must be in integer!!'),
    check('gender')
        .notEmpty().withMessage('gender must be required!')
        .isIn(['male','female','other']).withMessage('Gender must be either in male ,female or other!'),
    check('phoneNo')
        .notEmpty().withMessage('phoneNo must be required!!')
        .isMobilePhone().withMessage('phoneNo is invalid!!'),
    check('userStatus')
        .notEmpty().withMessage('userstatus is required!!')
        .isIn(['worker','manager','owner']).withMessage('userStatus must be in worker,manager,owner !')
        ,
        (req,res,next)=>{
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(402).json({
                    message:errors.array()
                })
            }
            next();
        }

        ]

        validation.workerValidate=[
            check('userId')
                .notEmpty().withMessage('userId is required!')
                .isInt().withMessage('userId must be integer')
                .custom(async(value)=>{
                    const checkUser=await User.findOne({where:{id:value}});
                    if(!checkUser){
                        throw new Error('UserId doesnot exist!')
                    }
                }),
            check('imageId')
                .notEmpty().withMessage('imageId is required!')
                .isInt().withMessage('imageId must be integer!')
                .custom(async(value)=>{
                    const checkImage=await Fileupload.findOne({where:{id:value}});
                    if(!checkImage){
                        throw new Error('imageId doesnot exist!')
                    }
                }),
                (req,res,next)=>{
                    const errors=validationResult(req);
                    if(!errors.isEmpty()){
                        return res.status(402).json({
                            message:errors.array()
                        })
                    }
                    next();
                }
        ]

module.exports=validation