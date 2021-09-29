// priority: 100
// - addConversion
// - addBasin
// - addFilling
// - addEmptying
function addCrushing(output, input, processingTime) {
    addProcessingRecipe('create:crushing', output, input, processingTime)
}
function addCutting(output, input, processingTime) {
    addProcessingRecipe('create:cutting', output, input, processingTime)
}
function addMilling(output, input, processingTime) {
    addProcessingRecipe('create:milling', output, input, processingTime)
}
function addMixing(output, input, heatRequirement, processingTime) {
    addProcessingRecipe('create:mixing', output, input, processingTime, heatRequirement)
}
function addCompacting(output, input, heatRequirement, processingTime) {
    addProcessingRecipe('create:compacting', output, input, processingTime, heatRequirement)
}
function addPressing(output, input, processingTime) {
    addProcessingRecipe('create:pressing', output, input, processingTime)
}
function addSandpaperPolishing(output, input, processingTime) {
    addProcessingRecipe('create:sandpaper_polishing', output, input, processingTime)
}
function addSplashing(output, input, processingTime) {
    addProcessingRecipe('create:splashing', output, input, processingTime)
}
function addDeploying(output, input, heldItem) {
    let inputArr = []
    inputArr.push(input)
    inputArr.push(heldItem)
    addProcessingRecipe('create:deploying', output, inputArr)
}
function addFilling(output, input, fluid) {
    let inputArr = []
    inputArr.push(input)
    inputArr.push(solveFluid(fluid))
    addProcessingRecipe('create:filling', output, inputArr)
}

function addProcessingRecipe(type, output, input, processingTime, heatRequirement) {
    if (!processingTime) processingTime = 300
    modpackRecipes.push({
        type: type,
        ingredients: solveIngredients(input),
        results: solveItems(output),
        processingTime: processingTime,
        heatRequirement: heatRequirement
    })
}