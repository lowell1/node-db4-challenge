/**
 * - `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
 */

const db = require("./db");

module.exports = {
    getRecipes: function() {
        return db("recipes").select("*")
    },
    getShoppingList: function(recipeId) {
        return db("recipes_ingredients_junction")
        .join("ingredients", "ingredient_id", "=", "ingredients.id")
        .select("ingredient_name")
        // .select("*")
        .where({recipe_id: recipeId})
    }
}