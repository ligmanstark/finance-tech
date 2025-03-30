const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('hello world');
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
