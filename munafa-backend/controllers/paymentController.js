const Payment = require('../models/Payment');
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;
// Create a new payment
const createPayment = async (req, res) => {
    const { senderName, receiverName, cardDetails, paymentFailure, paymentSuccess, userId,senderBank } = req.body;
    //const userId = req.params.userId; // Access userId from route parameters
    console.log("userId",userId)
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
const getPaymentsForUser = async (req,res) => {
    // Validate userId
    const userId = req.body.userId
    console.log(typeof userId)
    console.log("userId inside getpaymentsForUser",userId)
    try {
        const payments = await Payment.find({ userId });
        console.log("payments",payments)
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

module.exports = {
    createPayment,
    getPaymentsForUser,
    updatePayment,
    deletePayment
};
