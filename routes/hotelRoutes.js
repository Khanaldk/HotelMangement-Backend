const express=require("express");

const hotelController=require("../controllers/hotelController");
const checkAuth = require("../middleware/checkAuth");

const validation=require('../middleware/validation')

const hotelRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      hotel:
 *        type: object
 *        required:
 *          - hotelName
 *          - address
 *          - description
 *          - openingTime
 *          - clossingTime
 *        properties:
 *          hotelName:
 *           type: string
 *           description: Hotel's hotelname
 *          address:
 *           type: string
 *           description: Hotel's address
 *          description:
 *           type: string
 *           description: Hotel's description
 *          openingTime:
 *           type: string
 *           description: Hotel's openingTime
 *          clossingTime:
 *           type: string
 *           description: Hotel's clossingTime
 *         
 */



/**
 * @swagger
 * tags:
 *     name: Hotel
 *     description: The Hotel managing API endpoint
 */


/**
 * @swagger
 * /api/hotel:
 *   post:
 *     summary: Create hotel 
 *     security:
 *       - jwt: []
 *     tags: [Hotel]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hotel'    
 *     responses:
 *       200:
 *         description: Created hotel successfully
 *       500:
 *         description: Some Server Error
 */


hotelRoutes.post('/',checkAuth.loginTokenVerification,validation.hotelValidate,hotelController.createHotel)

/**
 * @swagger
 * /api/hotel:
 *   get:
 *     summary: List of all Hotel
 *     security:
 *       - jwt: []
 *     tags: [Hotel]
 *     responses:
 *      200:
 *          description: Hotel List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

hotelRoutes.get('/',hotelController.getAllHotel);

/**
 * @swagger
 * /api/hotel/{id}:
 *   get:
 *     summary: Retrieve hotel
 *     security:
 *       - jwt: []
 *     tags: [Hotel]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: hotel's id
 *     responses:
 *      200:
 *          description: hotel retrieved successfully
 *      500:
 *          description: Some Server Error
 */

hotelRoutes.get('/:id',hotelController.getHotelById);


/**
 * @swagger
 * /api/hotel/{id}:
 *   patch:
 *     summary: Update hotel
 *     security:
 *       - jwt: []
 *     tags: [Hotel]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: hotel's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hotel'
 *     responses:
 *      200:
 *          description: hotel updated successfully
 *      500:
 *          description: Some Server Error
 */

hotelRoutes.patch('/:id',validation.hotelValidate,hotelController.updateHotelById);

/**
 * @swagger
 * /api/hotel/{id}:
 *   delete:
 *     summary: delete hotel
 *     security:
 *       - jwt: []
 *     tags: [Hotel]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: hotel's id
 *     responses:
 *      200:
 *          description: hotel deleted successfully
 *      500:
 *          description: Some Server Error
 */

hotelRoutes.delete('/:id',hotelController.deleteHotelById);

module.exports=hotelRoutes