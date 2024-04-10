const mongoose = require('mongoose');


const paymentTransferSchema = new mongoose.Schema({
  name: String,
  bank: String,
  ifsc:String,
  account:String,
  amount:String,
  paymentFailure: Boolean,
  paymentSuccess: Boolean,
  userId:String,
},{
    timestamps:true
});

module.exports = mongoose.model('paymentTransfer', paymentTransferSchema);
