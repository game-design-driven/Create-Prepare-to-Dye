// priority: 100
function replaceShaped(output, pattern, key, onlyShaped) {
    if (onlyShaped) {
        removeRecipe({ type: 'minecraft:crafting_shaped', output: output })
    } else {
        removeRecipe({ output: solveResult(output) })
    }
    return addShaped(output, pattern, key)
}
function replaceShapeless(output, input) {
    removeRecipe({ type: 'minecraft:crafting_shapeless', output: output })
    return addShapeless(output, input)
}
/**
 * @param {result} output 
 * @param {string[]} pattern ['aaa','bbb','aaa']
 * @param {Map<any,string>} key { a: 'stick', b: 'gray_concrete' }
 */
function addShaped(output, pattern, key, hidden) {
    hidden = hidden || false
    if (!Array.isArray(pattern)) pattern = [pattern]
    let recipe = {
        type: "minecraft:crafting_shaped",
        pattern: pattern,
        result: solveResult(output),
        key: key,
        hidden: hidden
    };
    modpackRecipes.push(recipe)
    return recipe;
}
/**
 * @param {result} output '4x stick'
 * @param {ingredient[]} input ['glass','stick'] 
 */
function addShapeless(output, input) {
    if (!Array.isArray(input)) input = [input]
    if (input.length == 1 && Item.of(input[0]).count == 1){
        addInfusion(output, input[0], 1, 'ptdye:mechanical_device');
    }

    let recipe = {
        type: "minecraft:crafting_shapeless",
        result: solveResult(output),
        ingredients: solveLimitedIngredients(input)
    };
    modpackRecipes.push(recipe)
    return recipe;
}
/**
 * @param {result} output '4x stick'
 * @param {ingredient} input 'glass' 
 */
function addStonecutting(output, input, hidden) {
    hidden = hidden || false
    if (Item.of(output).id=='minecraft:air') return;
    if (Item.of(input).id=='minecraft:air') return;
    let recipe = {
        type: "minecraft:stonecutting",
        result: solveResult(output),
        ingredient: solveLimitedIngredient(input),
        hidden: hidden
    };
    modpackRecipes.push(recipe)
    allStonecuttingRecipes.push(recipe)
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
    if (!experience) experience = 10
    let recipe = {type: type};
    if (output) recipe.result = solveResult(output)
    if (input) recipe.ingredient = solveIngredient(input)
    if (experience) recipe.experience = experience
    if (cookingTime) recipe.cookingtime = cookingTime
    modpackRecipes.push(recipe)
    return recipe;
}

