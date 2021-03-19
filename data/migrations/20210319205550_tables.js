
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name', 128).notNullable()
      tbl.text('project_description')
      tbl.boolean('project_completed').defaultTo(false);
    })
  
    .createTable('resources', tbl => {
      tbl.increments('resources_id')
      tbl.string('resource_name', 128).notNullable().unique()
      tbl.text('resource_description')
      
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description', 128).notNullable()
        tbl.text('task_notes')
        tbl.integer('task_completed').defaultTo(0)
        
        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('project_id')
          .inTable('projects')
          // .onDelete('CASCADE')
          // .onUpdate('CASCADE');
      })
      .createTable('project_resources', tbl => {
        tbl.increments('project_resource_id')
        
        tbl
          .integer('task_id')
          .unsigned()
          .notNullable()
          .references('task_id')
          .inTable('tasks')
         
        tbl
          .integer('resources_id')
          .unsigned()
          .notNullable()
          .references('resources_id')
          .inTable('resources')  
    })
  
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  };
  