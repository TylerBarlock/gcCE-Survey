
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const surveyRouter = require('./routes/survey-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('MongoDB Testing.');
})

app.use('/api', surveyRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));