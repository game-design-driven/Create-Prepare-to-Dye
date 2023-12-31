// priority: 100
// - addConversion is still missing
const temperature = {
    none: 'none',
    heated: "heated",
    superHeated: "superheated"
}
/**
* @param {result[]} output will be treated as a pool
* @param {ingredient} input
* @param {process[]} steps 
* @param {number} loops 
* @param {limitedIngredient} transitionalItem 
 */
function addAssembly(output, input, steps, loops, transitionalItem) {
    // console.log("Before cleaning  " + modpackRecipes);
    steps.forEach((recipe) => {
        modpackRecipes = modpackRecipes.filter(item => item !== recipe)
        // console.log("adding recipe !!! " + JSON.stringify(recipe));
    })
    // console.log("AFter cleaning  " + modpackRecipes);

    // if (!transitionalItem) transitionalItem = Ingredient.of(input).withNBT({ Process: 1 })
    // if (!transitionalItem) transitionalItem = Item.of('item id here', {nbt here})
    if (!transitionalItem) transitionalItem = Item.of(input, { Process: 1 })
    if (!loops) loops = 1
    let recipe = {
        type: "create:sequenced_assembly",
        ingredient: solveIngredient(input),
        transitionalItem: solveIngredient(transitionalItem),
        sequence: steps,
        results: solveResults(output),
        loops: loops
    }
    // console.log("adding recipe !!! " + JSON.stringify(recipe));
    modpackRecipes.push(recipe)
    return recipe
}
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {number} processingTime amount of time in ticks default(300)
 */
function addCrushing(output, input, processingTime) {
    return addProcessingRecipe('create:crushing', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addCutting(output, input, processingTime) {
    return addProcessingRecipe('create:cutting', [solveResult(output)], [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addMilling(output, input, processingTime) {
    return addProcessingRecipe('create:milling', solveResults(output), [solveLimitedIngredient(input)])
}
/**
 * @param {result} output
 * @param {limitedIngredient[]} input
 * @param {string} heatRequirement 'none','heated','superHeated' can use temperature object properties instead
 * @param {number} processingTime amount of time in ticks default(150)
 * @param {fluid} fluidOutput
 * @param {fluid[]} fluidInput
 */
function addCompacting(output, input, heatRequirement, processingTime) {
    return addProcessingRecipe('create:compacting',
        solveResults(output),
        solveLimitedIngredients(input),
        processingTime, heatRequirement)
}
/**
 * @param {result[]} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addPressing(output, input, processingTime) {
    return addProcessingRecipe('create:pressing', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addSandpaperPolishing(output, input, processingTime) {
    return addProcessingRecipe('create:sandpaper_polishing', [solveResult(output)], [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addSplashing(output, input, processingTime) {
    return addProcessingRecipe('create:splashing', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {limitedIngredient} input
 * @param {limitedIngredient} heldItem
 */
function addDeploying(output, input, heldItem) {
    return addProcessingRecipe('create:deploying', solveResults(output), solveLimitedIngredients([input, heldItem]))
}
/**
 * @param {result} output
 * @param {limitedIngredient} input
 * @param {fluid} fluid 
 */
function addFilling(output, input, fluid) {
    return addProcessingRecipe('create:filling', [solveResult(output)], [solveLimitedIngredient(input), solveFluid(fluid)])
}
/**
 * @param {result} output
 * @param {ingredient} input
 * @param {fluid} fluid 
 */
function addEmptying(output, input, fluid) {
    return addProcessingRecipe('create:emptying', [solveResult(output), solveFluid(fluid)], [solveLimitedIngredient(input)])
}
/**
 * @param {result[]} output
 * @param {limitedIngredient[]} input
 * @param {string} heatRequirement 'none','heated','superHeated' can use temperature object properties instead
 * @param {number} processingTime amount of time in ticks default(150)
 * @param {fluid[]} fluidOutput
 * @param {fluid[]} fluidInput
 */
function addMixing(output, input, heatRequirement, processingTime, fluidOutput, fluidInput) {
    let inputArr = solveLimitedIngredients(input).concat(solveFluids(fluidInput))
    let outputArr = solveResults(output).concat(solveFluids(fluidOutput))
    return addProcessingRecipe('create:mixing', outputArr, inputArr, processingTime, heatRequirement)
}
/**
 * Adds a mechanical crafting recipe to the modpackRecipes array.
 * @param {string} output - The output of the recipe.
 * @param {string[]} pattern - The crafting pattern for the recipe.
 * @param {object} key - A map of characters to items.
 * @returns {object} The recipe object that was added to the modpackRecipes array.
 */
function addMechanicalCrafting(output, pattern, key) {
    let recipe = {
        type: "create:mechanical_crafting",
        pattern: pattern,
        result: output,
        key: key,
    };
    modpackRecipes.push(recipe)
    return recipe;
}
function addProcessingRecipe(type, output, input, processingTime, heatRequirement) {
    let recipe = {type: type}
    
    if (Array.isArray(output) && output.length > 0) {
        recipe.results = output;
    }
    if (Array.isArray(input) && input.length > 0) {
        recipe.ingredients = input;
    }
    if (processingTime) recipe.processingTime = processingTime
    if (heatRequirement) recipe.heatRequirement = heatRequirement
    modpackRecipes.push(recipe)
    return recipe
}

function addItemApplication(result, block_input, item_input){
    let input = [block_input, item_input]
    let recipe = {
        type: "create:item_application",
        results: solveResult(result),
        ingredients: solveIngredient(input),
    }
    modpackRecipes.push(recipe)
    return recipe
}
