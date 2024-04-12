const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    bank: {
        type: String,
        required: true
    },
    loanAmount: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true // Duration in months
    },
    paid: {
        type: [{
            amountPaid: {
                type: Number,
            },
            time: {
                type: Date,
                default: Date.now
            }
        }],
        default: []
    }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
