import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import morgan from 'morgan';

const app = express();

// Port variable
const PORT = 5000;

// Morgan logger
app.use(morgan('tiny'));

// Connect body parser to express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Initial GET method
app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Expressjs has started successfully"
    });
});

// Listen to port
app.listen(PORT, () => {
    console.log(`Started listening to port ${PORT}`);
});