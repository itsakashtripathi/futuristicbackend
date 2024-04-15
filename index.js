const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
require ('./models/index');
const app = express();
const PORT = process.env.PORT || 3001;

const indexRouter = require('./routes/index');

app.use(bodyparser.urlencoded ({extended: true, limit: '50mb'}));
app.use(bodyparser.json ({limit: '50mb'}));
app.use(express.json ());
app.use(express.urlencoded ({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', '*');
    next();
});

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    })
);

app.get('/', (req, res) => {
    res.status(200).send('Server is up and running');
});

app.use('/api/v1', indexRouter);

app.listen(PORT || 3001, () => {
    console.log(`Server Started Successfully On Port ${PORT}`);
});