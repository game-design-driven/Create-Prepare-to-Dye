// priority: 100
// - addConversion
// - addBasin
// - addFilling
// - addEmptying
const temperature = {
    none: 'none',
    heated: "heated",
    superHeated: "superheated"
}
const defaultProcessingTime = 300
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {number} processingTime amount of time in ticks default(300)
 */
function addCrushing(output, input, processingTime) {
    addProcessingRecipe('create:crushing', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addCutting(output, input, processingTime) {
    addProcessingRecipe('create:cutting', [solveResult(output)], [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {limitedIngredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addMilling(output, input, processingTime) {
    addProcessingRecipe('create:milling', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}
/**
 * @param {result} output
 * @param {limitedIngredient[]} input
 * @param {string} heatRequirement 'none','heated','superHeated' can use temperature object properties instead
 * @param {number} processingTime amount of time in ticks default(150)
 * @param {fluid} fluidOutput
 * @param {fluid[]} fluidInput
 */
function addCompacting(output, input, heatRequirement, processingTime, fluidOutput, fluidInput) {
    addProcessingRecipe('create:compacting',
        [solveResult(output)].concat(solveFluid(fluidOutput)),
        solveLimitedIngredients(input).concat(solveFluids(fluidInput)),
        processingTime, heatRequirement)
}
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addPressing(output, input, processingTime) {
    addProcessingRecipe('create:pressing', solveResults(output), [solveIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addSandpaperPolishing(output, input, processingTime) {
    addProcessingRecipe('create:sandpaper_polishing', [solveResult(output)], [solveIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {number} processingTime amount of time in ticks default(150)
 */
function addSplashing(output, input, processingTime) {
    addProcessingRecipe('create:splashing', solveResults(output), [solveIngredient(input)], processingTime)
}
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {ingredient} heldItem
 */
function addDeploying(output, input, heldItem) {
    let inputArr = []
    inputArr.push(solveIngredient(input))
    inputArr.push(solveIngredient(heldItem))
    addProcessingRecipe('create:deploying', solveResults(output), inputArr)
}
/**
 * @param {result[]} output
 * @param {ingredient} input
 * @param {fluid} fluid 
 */
function addFilling(output, input, fluid) {
    let inputArr = []
    inputArr.push(solveIngredient(input))
    inputArr.push(solveFluid(fluid))
    addProcessingRecipe('create:filling', solveResults(output), inputArr)
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
    console.log("why no mixz? " + outputArr + " in : " + inputArr);
    addProcessingRecipe('create:mixing', outputArr, inputArr, processingTime, heatRequirement)
}
function addProcessingRecipe(type, output, input, processingTime, heatRequirement) {
    if (!processingTime) processingTime = defaultProcessingTime
    modpackRecipes.push({
        type: type,
        results: output,
        ingredients: input,
        processingTime: processingTime,
        heatRequirement: heatRequirement
    })
}