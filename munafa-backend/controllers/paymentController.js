const Payment = require('../models/Payment');
const PaymentTransfer = require('../models/PaymentTransfer');
const paymentTransfer = require('../models/PaymentTransfer')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;

require('dotenv').config();


const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env;

const stripe = require('stripe')(STRIPE_SECRET_KEY)
// Create a new payment
const createPayment = async (req, res) => {
    const { senderName, receiverName, cardDetails, paymentFailure, paymentSuccess, userId, senderBank } = req.body;
    //const userId = req.params.userId; // Access userId from route parameters
    console.log("userId", userId)
    // if (!ObjectId.isValid(userId)) {
    //     return res.status(400).json({ message: 'Invalid userId' });
    // }
    try {
        const newPayment = new Payment({
            senderName,
            receiverName,
            cardDetails,
            senderBank,
            paymentFailure,
            paymentSuccess,
            userId // Use userId from route params
        });

        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get list of payments for a user
const getPaymentsForUser = async (req, res) => {
    // Validate userId
    const userId = req.body.userId
    console.log(typeof userId)
    console.log("userId inside getpaymentsForUser", userId)
    try {
        const payments = await Payment.find({ userId });
        console.log("payments", payments)
        res.status(201).json(payments)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a payment
const updatePayment = async (req, res) => {
    const { senderName, receiverName, cardDetails, paymentFailure, paymentSuccess } = req.body;
    const paymentId = req.params.paymentId;

    try {
        const updatedPayment = await Payment.findByIdAndUpdate(paymentId, {
            senderName,
            receiverName,
            cardDetails,
            paymentFailure,
            paymentSuccess
        }, { new: true });

        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a payment
const deletePayment = async (req, res) => {
    const paymentId = req.params.paymentId;

    try {
        await Payment.findByIdAndDelete(paymentId);
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




const createCustomer = async (req, res) => {

    try {

        const customer = await stripe.customers.create({
            name: req.body.name,
            email: req.body.email,
        });

        res.status(200).send(customer);

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}

const addNewCard = async (req, res) => {

    try {

        const {
            customer_id,
            card_Name,
            card_ExpYear,
            card_ExpMonth,
            card_Number,
            card_CVC,
        } = req.body;

        const card_token = await stripe.tokens.create({
            card: {
                name: card_Name,
                number: card_Number,
                exp_year: card_ExpYear,
                exp_month: card_ExpMonth,
                cvc: card_CVC
            }
        });

        const card = await stripe.customers.createSource(customer_id, {
            source: `${card_token.id}`
        });

        res.status(200).send({ card: card.id });

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}

const createCharges = async (req, res) => {

    try {

        const createCharge = await stripe.charges.create({
            receipt_email: 'tester@gmail.com',
            amount: parseInt(req.body.amount) * 100, //amount*100
            currency: 'INR',
            card: req.body.card_id,
            customer: req.body.customer_id
        });

        res.status(200).send(createCharge);

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}


const createMoneyTransfer = async (req, res) => {


    try {


        const { 
            fullName,
            bankName,
            ifscCode,
            accountNumber,
            nickname,
            amount,
            paymentFailure,
            paymentSuccess,
            userId
    
         } = req.body
    
        const  moneyTranferDetails =   new paymentTransfer({
                name: fullName,
                bank: bankName,
                ifsc:ifscCode,
                account:accountNumber,
                amount: amount,
                paymentFailure,
                paymentSuccess,
                userId
            })
    
          const savedMoneyTransferDetails =   await moneyTranferDetails.save()

          res.status(201).send(moneyTranferDetails )
        
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
 


}



const updateMoneyTransfer = async (req, res) => {
    console.log("updateMoneyTransfer got called")
    try {
        const {
            _id,
            // fullName,
            // bankName,
            // ifscCode,
            // accountNumber,
            // nickname,
            // amount,
            paymentFailure,
            paymentSuccess,
            userId
        } = req.body;

        // Assuming paymentTransfer is your Mongoose model
        // First, find the document to update
        const existingMoneyTransfer = await paymentTransfer.findOne({ _id });

        // Check if the document exists
        if (!existingMoneyTransfer) {
            return res.status(404).send({ msg: "Money transfer details not found" });
        }

        // Update the fields
        // existingMoneyTransfer.name = fullName;
        // existingMoneyTransfer.bank = bankName;
        // existingMoneyTransfer.ifsc = ifscCode;
        // existingMoneyTransfer.account = accountNumber;
        // existingMoneyTransfer.amount = amount;
        existingMoneyTransfer.paymentFailure = paymentFailure;
        existingMoneyTransfer.paymentSuccess = paymentSuccess;

        // Save the updated document
        const updatedMoneyTransfer = await existingMoneyTransfer.save();

        res.status(200).send(updatedMoneyTransfer);
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
};


const getSuceessfulMoneyTransfer = async (req, res) => {

    const paymentStatus = req.params.paymentStatus;
    
    try {

        const moneyTransferDetails = await PaymentTransfer.find({ $and: [
            { paymentFailure: false },
            { paymentSuccess: true }
          ]
        });

          res.status(201).send(moneyTranferDetails )
        
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
 

}


const getPendingMoneyTransfer = async (req, res) => {

    const paymentStatus = req.params.paymentStatus;
    
    try {

        const moneyTransferDetails = await PaymentTransfer.find({ $and: [
              { paymentFailure: true },
              { paymentSuccess: false }
            ]
          });

          res.status(201).send(moneyTranferDetails )
        
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
 

}








const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return (1400) * 100;
};

const paymentInent = async (req, res) => {
    console.log("paymentIntent got called")
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "INR",
        payment_method_types: ['card'],
        description: 'Your payment description goes here',

    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
}

module.exports = {
    createPayment,
    getPaymentsForUser,
    updatePayment,
    deletePayment,
    createCustomer,
    addNewCard,
    createCharges,
    paymentInent,
    createMoneyTransfer ,
    updateMoneyTransfer ,
    getSuceessfulMoneyTransfer,
    getPendingMoneyTransfer
};





// {
//     "id": "cus_PtYusD8n2Jjxx8",
//     "object": "customer",
//     "address": null,
//     "balance": 0,
//     "created": 1712696478,
//     "currency": null,
//     "default_source": null,
//     "delinquent": false,
//     "description": null,
//     "discount": null,
//     "email": "sameer@gmail.com",
//     "invoice_prefix": "5F86B60F",
//     "invoice_settings": {
//       "custom_fields": null,
//       "default_payment_method": null,
//       "footer": null,
//       "rendering_options": null
//     },
//     "livemode": false,
//     "metadata": {},
//     "name": "sameer",
//     "next_invoice_sequence": 1,
//     "phone": null,
//     "preferred_locales": [],
//     "shipping": null,
//     "tax_exempt": "none",
//     "test_clock": null
//   }