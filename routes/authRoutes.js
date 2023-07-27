const express=require('express');
const authController = require('../controllers/authController');

const authRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Login:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *           type: string
 *           example: "hotel123@gmail.com"
 *           description: User's Email
 *          password:
 *           type: string
 *           example: "hotel123"
 *           description: User's Password
*/

/**
 * @swagger
 * tags:
 *     name: Authentication
 *     description: The authentication managing API endpoint
*/

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User Login
 *     tags: [Authentication]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       201:
 *         description: Logged in successfully
 *       500:
 *         description: Some Server Error
*/

authRoutes.post('/login',authController.login)


module.exports=authRoutes


