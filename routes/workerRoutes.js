const express=require('express');

const workerController = require('../controllers/workerController');
const validation = require('../middleware/validation');

const workerRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      worker:
 *        type: object
 *        required:
 *          - userId
 *          - imageId
 *        properties:
 *          userId:
 *           type: integer
 *           description: worker's userId
 *          imageId:
 *           type: integer
 *           description: worker's imageId
 *         
 */



/**
 * @swagger
 * tags:
 *     name: Worker
 *     description: The worker managing API endpoint
 */


/**
 * @swagger
 * /api/worker:
 *   post:
 *     summary: Create Worker 
 *     security:
 *       - jwt: []
 *     tags: [Worker]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/worker'    
 *     responses:
 *       200:
 *         description: Created Worker successfully
 *       500:
 *         description: Some Server Error
 */

workerRoutes.post('/',validation.workerValidate,workerController.createWorker);

/**
 * @swagger
 * /api/worker:
 *   get:
 *     summary: List of all worker
 *     security:
 *       - jwt: []
 *     tags: [Worker]
 *     responses:
 *      200:
 *          description: worker List retrieved successfully
 *      500:
 *          description: Some Server Error
 */
workerRoutes.get('/',workerController.getAllWorker)

/**
 * @swagger
 * /api/worker/{id}:
 *   get:
 *     summary: Retrieve worker
 *     security:
 *       - jwt: []
 *     tags: [Worker]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: worker's id
 *     responses:
 *      200:
 *          description: worker retrieved successfully
 *      500:
 *          description: Some Server Error
 */

workerRoutes.get('/:id',workerController.getWorkerById)

/**
 * @swagger
 * /api/worker/{id}:
 *   patch:
 *     summary: Update worker
 *     security:
 *       - jwt: []
 *     tags: [Worker]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: worker's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/worker'
 *     responses:
 *      200:
 *          description: worker updated successfully
 *      500:
 *          description: Some Server Error
 */

workerRoutes.patch('/:id',validation.workerValidate,workerController.updateWorkerById);

/**
 * @swagger
 * /api/worker/{id}:
 *   delete:
 *     summary: delete worker
 *     security:
 *       - jwt: []
 *     tags: [Worker]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: worker's id
 *     responses:
 *      200:
 *          description: worker deleted successfully
 *      500:
 *          description: Some Server Error
 */

workerRoutes.delete('/:id',workerController.deleteWorkerById);

module.exports=workerRoutes