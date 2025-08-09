require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

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

app.get('/', (req, res) => {
    res.send("Hii");
});




app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});