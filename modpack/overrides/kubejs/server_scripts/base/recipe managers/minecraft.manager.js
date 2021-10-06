// priority: 100

function addShaped(output, pattern, key) {
    let recipe = {
        type: "minecraft:crafting_shaped",
        pattern: pattern,
        result: solveResult(output),
        key: key,
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addShapeless(output, input) {
    let recipe = {
        type: "minecraft:crafting_shapeless",
        result: solveResult(output),
        ingredients: solveIngredients(input)
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addStonecutting(output, input) {
    let recipe = {
        type: "minecraft:stonecutting",
        result: solveResult(output),
        ingredient: solveLimitedIngredient(input),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addSmithing(output, input,addition) {
    let recipe = {
        type: "minecraft:smithing",
        result: solveResult(output),
        base: solveLimitedIngredient(input),
        addition: solveLimitedIngredient(addition),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addSmelting(output, input, experience, cookingTime) {
    return mcProcess('minecraft:smelting', output, input, experience, cookingTime)
}
function addCampfire(output, input, experience, cookingTime) {
    return mcProcess('minecraft:campfire_cooking', output, input, experience, cookingTime)
}
function addBlasting(output, input, experience, cookingTime) {
    return mcProcess('minecraft:blasting', output, input, experience, cookingTime)
}
function addSmoking(output, input, experience, cookingTime) {
    return mcProcess('minecraft:smoking', output, input, experience, cookingTime)
}
function mcProcess(type, output, input, experience, cookingTime) {
    let recipe = {
        type: type,
        result: solveResult(output),
        ingredient: solveIngredient(input),
        experience: experience,
        cookingtime: cookingTime
    };
    modpackRecipes.push(recipe)
    return recipe;
}