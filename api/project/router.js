// build your `/api/projects` router here
const express = require('express');
const Projects = require('../project/model')
const router = express.Router();

// Get project list
router.get('/', (req,res,next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

// Post new projects
router.post("/", (req,res,next) => {

    Projects.insert(req.body)
    .then(project=> {
        res.status(201).json(project)
    })
    .catch(next)
})

// export
module.exports = router;
