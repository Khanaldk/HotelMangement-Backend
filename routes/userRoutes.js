const express=require('express');
const userController = require('../controllers/userController');
const checkAuth = require('../middleware/checkAuth');
const validation = require('../middleware/validation');

const userRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      user:
 *        type: object
 *        required:
 *          - fname
 *          - lname
 *          - email
 *          - password
 *          - age
 *          - gender
 *          - phoneNo
 *          - userStatus
 *        properties:
 *          fname:
 *           type: string
 *           description: User's fname
 *          lname:
 *           type: string
 *           description: User's lname
 *          email:
 *           type: string
 *           description: User's email
 *           format: email
 *          password:
 *           type: string
 *           description: User's password
 *          age:
 *           type: integer
 *           description: User's age
 *          gender:
 *           type: string
 *           description: User's gender
 *          phoneNo:
 *           type: string
 *           description: User's phoneNo
 *          userStatus:
 *           type: string
 *           description: User's userStatus
 *         
 */

/**
 * @swagger
 * tags:
 *     name: User
 *     description: The user managing API endpoint
 */



/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create new user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'    
 *     responses:
 *       200:
 *         description: Created User successfully
 *       500:
 *         description: Some Server Error
 */

userRoutes.post('/',validation.userValidate,userController.createUser)


/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: List of all user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     responses:
 *      200:
 *          description: user List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

userRoutes.get('/',userController.getAllUser)

/**
 * @swagger
 * /api/user/alpha:
 *   get:
 *     summary: Retrieve name
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: query
 *        name: alphabet
 *        schema:
 *          type: string
 *          required: true
 *          description: User's name
 *     responses:
 *      200:
 *          description: user retrieved successfully
 *      500:
 *          description: Some Server Error
 */

userRoutes.get('/alpha',userController.findByAlphabets)

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Retrieve user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: user's id
 *     responses:
 *      200:
 *          description: user retrieved successfully
 *      500:
 *          description: Some Server Error
 */

// userRoutes.get('/:id',userController.getUserById)

/**
 * @swagger
 * /api/user/{id}:
 *   patch:
 *     summary: Update user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: user's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *      200:
 *          description: user updated successfully
 *      500:
 *          description: Some Server Error
 */

userRoutes.patch('/:id',userController.updateUserById)


/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: delete user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: user's id
 *     responses:
 *      200:
 *          description: user deleted successfully
 *      500:
 *          description: Some Server Error
 */

userRoutes.delete('/:id',userController.deleteUserById)

module.exports=userRoutes