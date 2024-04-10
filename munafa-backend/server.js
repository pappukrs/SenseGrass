const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./database/db')
const cors = require('cors');

console.log("db::--",db)
const userRoute = require('./routes/authRoutes')
console.log("userRoute",userRoute)
app.use(cors())
app.use(express.json());

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));

app.use('/',userRoute)

app.listen(PORT,"0.0.0.0", async() => {
  try {
    let b = await db.con
    console.log("database connected")
    
  } catch (error) {
    console.log("Error during db connection",error)
    
  }
});
