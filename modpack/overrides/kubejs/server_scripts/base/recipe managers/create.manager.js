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
function addCrushing(output, input, processingTime) {
    addProcessingRecipe('create:crushing', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}
function addCutting(output, input, processingTime) {
    addProcessingRecipe('create:cutting', [solveResult(output)], [solveLimitedIngredient(input)], processingTime)
}
function addMilling(output, input, processingTime) {
    addProcessingRecipe('create:milling', solveResults(output), [solveLimitedIngredient(input)], processingTime)
}

function addCompacting(output, input, heatRequirement, processingTime, fluidOutput, fluidInput) {
    console.log('List of the stuffs ' + solveLimitedIngredients(input).concat(solveFluids(fluidInput)));
    addProcessingRecipe('create:compacting',
        [solveResult(output)].concat(solveFluid(fluidOutput)),
        solveLimitedIngredients(input).concat(solveFluids(fluidInput)),
        processingTime, heatRequirement)
}
function addPressing(output, input, processingTime) {
    addProcessingRecipe('create:pressing', solveResults(output), [solveIngredient(input)], processingTime)
}
function addSandpaperPolishing(output, input, processingTime) {
    addProcessingRecipe('create:sandpaper_polishing', [solveResult(output)], [solveIngredient(input)], processingTime)
}
function addSplashing(output, input, processingTime) {
    addProcessingRecipe('create:splashing', solveResults(output), [solveIngredient(input)], processingTime)
}
function addDeploying(output, input, heldItem) {
    let inputArr = []
    inputArr.push(solveIngredient(input))
    inputArr.push(solveIngredient(heldItem))
    addProcessingRecipe('create:deploying', solveResults(output), inputArr)
}
function addFilling(output, input, fluid) {
    let inputArr = []
    inputArr.push(solveIngredient(input))
    inputArr.push(solveFluid(fluid))
    addProcessingRecipe('create:filling', solveResults(output), inputArr)
}
function addMixing(output, input, heatRequirement, processingTime, fluidOutput, fluidInput) {
    let inputArr = solveIngredients(input).concat(solveFluids(fluidInput))
    let outputArr = solveResults(output).concat(solveFluids(fluidOutput))
    console.log("why no mixz? " + outputArr + " in : " + inputArr);
    addProcessingRecipe('create:mixing', outputArr, inputArr, processingTime, heatRequirement)
}
function addProcessingRecipe(type, output, input, processingTime, heatRequirement) {
    if (!processingTime) processingTime = 300
    modpackRecipes.push({
        type: type,
        results: output,
        ingredients: input,
        processingTime: processingTime,
        heatRequirement: heatRequirement
    })
}