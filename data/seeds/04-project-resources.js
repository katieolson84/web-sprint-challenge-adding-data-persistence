exports.seed = function(knex) {
  return knex('project_resources').insert([
    {
      task_id: 1,
      resources_id: 1,
    }
  ])
};
