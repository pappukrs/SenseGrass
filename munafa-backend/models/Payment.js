const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
  senderName: String,
  receiverName: String,
  cardDetails: {
    cardNumber: String,
    expirationDate: String,
    cvv: String
  },
  senderBank:String,
  paymentFailure: Boolean,
  paymentSuccess: Boolean,
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model
userId:String,
},{
    timestamps:true
});

module.exports = mongoose.model('Payment', paymentSchema);
