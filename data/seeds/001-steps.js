/*
table.increments();
    table.integer("step_number").notNullable();
    table.string("description", 128).notNullable();
    table.integer("ingredient_quantity").notNullable();
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
*/
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1,
          description: "step 1",
          ingredient_quantity: "1eafzk",
          ingredient_id: 1,
          recipe_id: 1,
        },
        {
          step_number: 2,
          description: "step 2",
          ingredient_quantity: "1eafzk",
          ingredient_id: 2,
          recipe_id: 1,
        },
        {
          step_number: 1,
          description: "step 1",
          ingredient_quantity: "1eafzk",
          ingredient_id: 2,
          recipe_id: 2,
        },
        {
          step_number: 2,
          description: "step 2",
          ingredient_quantity: "1eafzk",
          ingredient_id: 2,
          recipe_id: 2,
        }
      ]);
    });
};
