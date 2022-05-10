const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const someData = require('./models/some-data.model');
// mongodb+srv://tutorial:<password>@cluster0.cdksa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express();



mongoose.connect('mongodb+srv://tutorial:example@cluster0.cdksa.mongodb.net/u08-test?retryWrites=true&w=majority').then(() => {
    /* const data = new someData({name: 'someData', isSour: true, rating: 4});

    data.save().then(() => {
        console.log(`Saved ${data.name} to database`);
    }); */
    console.log('Connected');
});

app.use(cors());
app.use(express.json());
const dataRouter = require('./routes/dataRoutes');

app.use('/api/data', dataRouter);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})