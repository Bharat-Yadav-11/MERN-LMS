require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth-routes/index')

// db connection
const connectDB = require('./database/mongodb');
connectDB();

// middlewares
app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

// routes configuration
app.use('/auth', authRoutes);


app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
  next();
});

app.get('/', (req, res) => {
    res.send("Hii");
});




app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});