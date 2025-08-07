require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./database/mongodb');
connectDB();

cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hii");
});




app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});