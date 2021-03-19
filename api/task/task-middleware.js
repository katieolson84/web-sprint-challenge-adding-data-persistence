const validateTask = (req,res,next) => {
    if(!req.body.task_description || !req.body.project_id) {
        res.status(400).json({message: 'task description or project id is missing'})
    }else {
        next()
    }
}

module.exports = {
    validateTask,
}