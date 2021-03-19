const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// pull in routes
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

// use imports
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(helmet());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('/', (req, res)=> {
    res.json("Project API")
})

// middleware
server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: "Something is terribly wrong"
    })
})

// export
module.exports = server;

