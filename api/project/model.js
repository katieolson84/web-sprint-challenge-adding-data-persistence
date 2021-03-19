// build your `Project` model here
const db = require('../../data/dbConfig')

const get= () => {
    return db('projects')
}

const getById = async (project_id) => {
    const project = await db('projects as p')
    .select('p.*')
    .where('p.project_id', project_id)
    .first()
    return project
}

const insert = (project) => {
    return db('projects')
    .insert(project)
    .then(id => {getById(id[0]);
    });
}

module.exports = {
    get,
    getById,
    insert,

}



