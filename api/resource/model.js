// build your `Resource` model here
const db = require('../../data/dbConfig')

const get= () => {
    return db('resources')
}

const getById = async (resources_id) => {
    const resources = await db('resources as r')
    .select('r.*', )
    .where('r.resources_id', resources_id)
    .first()
    return resources

}

const insert = (resource) => {
    return db('resources')
    .insert(resource)
    .then(id => {getById(id[0])
    });
};

module.exports = {
    get,
    getById,
    insert,

}