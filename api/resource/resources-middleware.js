const Resources = require('./model')

const checkId = async (req,res,next) => {
    try{
        const resources = await Resources.get(req.params.id)
        if(!resources) {
            res.status(400).json({message: 'Resource not found'})
        }else {
            req.resources = resources
            next()
        }
    }catch (err) {
        next(err)
    }
}

module.exports = {
    checkId
}