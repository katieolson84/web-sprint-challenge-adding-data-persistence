// build your `Project` model here
const db = require('../../data/dbConfig')

const get= () => {
    return db('projects')
}

// Future code for stretch to find project by Id
const getById = async (project_id) => {
    const project = await db('projects as p')
    .select('p.*')
    .where('p.project_id', project_id)
    .first()
    return project
}

// add a new project to db
const insert = (project) => {
    return db('projects')
    .insert(project)
    .then(id => {getById(id[0]);
    });
}

// exports 

module.exports = {
    get,
    // getById,
    insert,

}



