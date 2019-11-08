
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", table => {
    table.increments();
    table.string("recipe_name", 128).unique().notNullable();
})
.createTable("ingredients", table => {
    table.increments();
    table.string("ingredient_name", 128).unique().notNullable(); 
})
.createTable("steps", table => {
    table.increments();
    table.integer("step_number").notNullable();
    table.string("description", 128).notNullable();
    table.string("ingredient_quantity", 128).notNullable();
    table.integer("ingredient_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("ingredients");
    table.integer("recipe_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("recipes");
})
.createTable("recipes_ingredients_junction", table => {
    table.integer("ingredient_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("ingredients");
    table.integer("recipe_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("recipes");
    table.primary(["ingredient_id", "recipe_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes_ingredients_junction")
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes");
};
