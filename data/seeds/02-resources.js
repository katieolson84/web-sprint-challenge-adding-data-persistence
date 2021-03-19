exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'Visual Studio Code',
      resource_description: 'Use this program to code the project',
    }
  ])
};
