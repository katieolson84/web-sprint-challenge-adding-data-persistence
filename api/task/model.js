// build your `Task` model here
const db = require('../../data/dbConfig')

const get= () => {
    return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
        'p.project_id', 
        't.task_description as task description',
        't.task_notes',
        't.task_completed',
        'p.project_name as project name',
        'p.project_description as project description'
        )
}

const getById = async (id) => {
    return db('tasks').where({id}).first()
}

const insert = (task) => {
    return db('tasks')
    .insert(task)
    .then(id => {getById(id[0])
    });
};

module.exports = {
    get,
    getById,
    insert,

}
