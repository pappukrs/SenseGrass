const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./database/db')
console.log("db::--",db)

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
