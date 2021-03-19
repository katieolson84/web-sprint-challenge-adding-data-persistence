// build your `/api/resources` router here
const express = require('express');
const Resources = require('../resource/model')
const router = express.Router();

// Get resource list
router.get('/', (req,res,next) => {
    Resources.get()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

// Post new resources
router.post("/", (req,res,next) => {

    Resources.insert(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})
module.exports = router;
