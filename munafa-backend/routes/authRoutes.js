const Router = require('express').Router();
const LoanController = require('../controllers/LoanController')
const UserController = require('../controllers/userController');
const PaymentController = require('../controllers/paymentController');



// User routes
Router.get('/users', UserController.userList);
Router.post('/users', UserController.createUser);
Router.get('/users/:userId',UserController.getSingleUser)






 //Loans Routes

 Router.post('/loan/create',LoanController.createNewLoan)
 Router.get('/loan/list',LoanController.getLoansList)
 Router.get('/loan/:loanId',LoanController.getSingleLoan)
 Router.put('/loan/:loanId',LoanController.updateLoan)
 Router.delete('/loan/:loanId',LoanController.deleteLoan)
 Router.post('/loan/bulk',LoanController.InsertBulkLoan)


// Payment routes
Router.post('/users/:userId/payments', PaymentController.createPayment); // Create a new payment for a user
Router.post('/users/:userId/payment', PaymentController.getPaymentsForUser); // Get payments for a user
Router.put('/payments/:paymentId', PaymentController.updatePayment); // Update a payment
Router.delete('/payments/:paymentId', PaymentController.deletePayment); // Delete a payment

//

Router.post('/create-customer',PaymentController.createCustomer)
Router.post('/add-card',PaymentController.addNewCard);
Router.post('/create-charges',PaymentController.createCharges)

//
Router.post('/save-money-transfer-details',PaymentController.createMoneyTransfer)

 Router.put('/update-money-tranfer-details',PaymentController.updateMoneyTransfer )
 Router.post('/success-money-tranfer-details',PaymentController.getSuceessfulMoneyTransfer)
 Router.post('/pending-money-tranfer-details',PaymentController.getPendingMoneyTransfer)


 Router.post('/create-payment-intent',PaymentController.paymentInent)





module.exports = Router;
