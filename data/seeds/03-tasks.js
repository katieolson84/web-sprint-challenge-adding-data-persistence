
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_description: 'Import all dependencies',
      task_notes: 'Import Express, Middleware needed, and knex.',
      project_id: 1, 
    }
  ])
};
