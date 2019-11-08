const helpers = require("./data/helpers");

helpers.getRecipes()
.then(recipes => console.log( recipes))

helpers.getShoppingList(1)
.then(list => console.log(list))
.catch(err => console.log(err))