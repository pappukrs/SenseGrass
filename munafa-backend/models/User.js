const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mob: { type: Number, required: true },
  //payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }]
},{
  timestamps:true
});

module.exports = mongoose.model('User', userSchema);
