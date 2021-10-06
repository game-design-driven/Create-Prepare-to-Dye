// priority: -1
let recipeIdNumber = 0
let allIds = []
let recipeIdSuffix = "pack"

onEvent('recipes', event => {
    modpackRecipes.forEach(recipe => {
        console.log(recipe);

        removeAir(recipe)
        // removeAir(recipe)
        event.custom(recipe).id = getUniqueName(recipe)
    });
})

function removeAir(recipe) {
    if (Array.isArray(recipe.ingredients)) {
        console.log(recipe.ingredients);
        recipe.ingredients.forEach(ingredient => {
            if ((ingredient + "").includes("minecraft:air")) {
                console.log("success! " + ingredient);
                // delete recipe.ingredients[ingredient]
                recipe.ingredients = recipe.ingredients.filter(i => i !== ingredient)
            }
        });
        console.log("filtered " + recipe.ingredients)
    }
}
function getUniqueName(recipe) { //doesn't 
    let results =
        recipe['results'] && Array.isArray(recipe['results']) ? recipe['results'][0] :
            recipe['results'] ? recipe['results'] :
                recipe['result'] ? recipe['result'] :
                    recipe['output'] ? recipe['output'] : 'output_field_not_found'
    // results = (results + "").replaceAll("'", '');
    results = (results + "").replaceAll(" ", '');
    let name = recipe.type + "/" + results.split(':')[1]
    name = name.split("'")[0]
    if (allIds.includes(name)) {
        let id = 0
        while (allIds.includes(name + "/" + id)) {
            id++
        }
        name = (name + "") + "/" + id
    }
    allIds.push(name)
    return name + "/" + recipeIdSuffix
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
