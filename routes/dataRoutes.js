const express = require('express');
const router = express.Router();
const someDataModel = require('../models/some-data.model');


router.get('/get-data', async (req, res) => {
    
    try {
        
        const data = await someDataModel.find();
        if(data == null) {
            return res.status(404).json({status: 404, data: null, message: 'Could not find data'});
        }
        return res.status(200).json({status: 200, data: data, message: "successfully some data"});
    } catch (error) {
        return res.status(500).json({status: 500, message: error.message})
    }

});

module.exports = router;