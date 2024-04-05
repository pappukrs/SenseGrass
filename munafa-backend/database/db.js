
const mongoose = require('mongoose');


const mongoURI =  'mongodb+srv://pappu:pappu123@cluster0.whsucgh.mongodb.net/munafa';


module.exports.con=mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
});










