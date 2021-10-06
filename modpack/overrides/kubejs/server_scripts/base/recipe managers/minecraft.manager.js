// priority: 100
/**
 * @param {result} output 
 * @param {string[]} pattern ['aaa','bbb','aaa']
 * @param {Map<any,string>} key { a: 'stick', b: 'gray_concrete' }
 */
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
/**
 * @param {result} output '4x stick'
 * @param {ingredient[]} input ['glass','stick'] 
 */
function addShapeless(output, input) {
    let recipe = {
        type: "minecraft:crafting_shapeless",
        result: solveResult(output),
        ingredients: solveIngredients(input)
    };
    modpackRecipes.push(recipe)
    return recipe;
}
/**
 * @param {result} output '4x stick'
 * @param {ingredient} input 'glass' 
 */
function addStonecutting(output, input) {
    let recipe = {
        type: "minecraft:stonecutting",
        result: solveResult(output),
        ingredient: solveLimitedIngredient(input),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
/**
 * @param {result} output
 * @param {ingredient} input 
 * @param {ingredient} addition 
 */
function addSmithing(output, input, addition) {
    let recipe = {
        type: "minecraft:smithing",
        result: solveResult(output),
        base: solveLimitedIngredient(input),
        addition: solveLimitedIngredient(addition),
    };
    modpackRecipes.push(recipe)
    return recipe;
}
/**
 * @param {result} output 
 * @param {ingredient} input 
 * @param {Number} experience 
 * @param {Number} cookingTime 
 */
function addSmelting(output, input, experience, cookingTime) {
    return mcProcess('minecraft:smelting', output, input, experience, cookingTime)
}
/**
 * @param {result} output 
 * @param {ingredient} input 
 * @param {Number} experience 
 * @param {Number} cookingTime 
 */
function addCampfire(output, input, experience, cookingTime) {
    return mcProcess('minecraft:campfire_cooking', output, input, experience, cookingTime)
}
/**
 * @param {result} output 
 * @param {ingredient} input 
 * @param {Number} experience 
 * @param {Number} cookingTime 
 */
function addBlasting(output, input, experience, cookingTime) {
    return mcProcess('minecraft:blasting', output, input, experience, cookingTime)
}
/**
 * @param {result} output 
 * @param {ingredient} input 
 * @param {Number} experience 
 * @param {Number} cookingTime 
 */
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