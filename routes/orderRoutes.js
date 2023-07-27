const express=require("express");
const OrderController = require("../controllers/orderController");

const OrderRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      order:
 *        type: object
 *        required:
 *          - dishName
 *          - cost
 *          - quantity
 *          - tableId
 *        properties:
 *          dishName:
 *           type: string
 *           description: order's dishName
 *          cost:
 *           type: integer
 *           description: order's cost
 *          quantity:
 *           type: integer
 *           description: order's quantity
 *          tableId:
 *           type: string
 *           description: order's tableId
 *         
 */



/**
 * @swagger
 * tags:
 *     name: Order
 *     description: The Order managing API endpoint
 */


/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Create order 
 *     security:
 *       - jwt: []
 *     tags: [Order]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'    
 *     responses:
 *       200:
 *         description: Created order successfully
 *       500:
 *         description: Some Server Error
 */


OrderRoutes.post('/',OrderController.createOrder);

/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: List of all order
 *     security:
 *       - jwt: []
 *     tags: [Order]
 *     responses:
 *      200:
 *          description: order List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

OrderRoutes.get('/',OrderController.getAllOrder)

/**
 * @swagger
 * /api/order/table:
 *   get:
 *     summary: Retrieve order
 *     security:
 *       - jwt: []
 *     tags: [Order]
 *     parameters:
 *      - in: query
 *        name: tableId
 *        schema:
 *          type: integer
 *          required: true
 *          description: table's id
 *     responses:
 *      200:
 *          description: order retrieved successfully
 *      500:
 *          description: Some Server Error
 */

OrderRoutes.get('/table',OrderController.getAllOrderByTableId);

/**
 * @swagger
 * /api/order/{id}:
 *   patch:
 *     summary: Update order
 *     security:
 *       - jwt: []
 *     tags: [Order]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: order's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *      200:
 *          description: order updated successfully
 *      500:
 *          description: Some Server Error
 */

OrderRoutes.patch('/:id',OrderController.updateOrderById)

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     summary: delete order
 *     security:
 *       - jwt: []
 *     tags: [Order]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: order's id
 *     responses:
 *      200:
 *          description: order deleted successfully
 *      500:
 *          description: Some Server Error
 */

OrderRoutes.delete('/:id',OrderController.deleteOrderById)

module.exports=OrderRoutes