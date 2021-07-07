exports.seed = knex => {
    return knex("recipes").truncate()
    .then(() => {
        return knex("recipes").insert([
            {recipe_name: "recipe1"},
            {recipe_name: "recipe2"},
            {recipe_name: "recipe3"}
        ]);
    });
} 