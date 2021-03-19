exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: 'Complete Node Sprint Build',
      project_description: 'Set up the code and make sure all tests are passing',
    }
  ])
};
