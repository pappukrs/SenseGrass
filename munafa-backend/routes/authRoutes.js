const Router = require('express').Router();
const UserController = require('../controllers/userController');
const PaymentController = require('../controllers/paymentController');

// User routes
Router.get('/users', UserController.userList);
Router.post('/users', UserController.createUser);
Router.get('/users/:userId',UserController.getSingleUser)
// Payment routes
Router.post('/users/:userId/payments', PaymentController.createPayment); // Create a new payment for a user
Router.post('/users/:userId/payment', PaymentController.getPaymentsForUser); // Get payments for a user
Router.put('/payments/:paymentId', PaymentController.updatePayment); // Update a payment
Router.delete('/payments/:paymentId', PaymentController.deletePayment); // Delete a payment


module.exports = Router;
