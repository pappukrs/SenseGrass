
const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/munafa';


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const db = mongoose.connection;


db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = db;
