const Project = require('./model')

const checkId = async (req,res,next) => {
    try{
        const projects = await Project.get(req.params.id)
        if(!projects) {
            res.status(400).json({message: 'Project id not found'})
        }else {
            req.projects = projects
            next()
        }
    }catch (err) {
        next(err)
    }
}

module.exports = {
    checkId
}