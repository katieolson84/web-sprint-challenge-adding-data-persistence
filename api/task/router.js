// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('../task/model')
const router = express.Router();
const {validateTask} = require('./task-middleware');

// Get task list
router.get('/', (req,res,next) => {
    Tasks.get()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})

// Post new tasks
router.post("/", validateTask, (req,res,next) => {

    Tasks.insert(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(next)
})
module.exports = router;
