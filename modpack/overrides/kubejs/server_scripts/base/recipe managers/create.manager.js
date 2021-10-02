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
    console.log('FILLING IS ALIVE ' + fluid);
    let inputArr = []
    inputArr.push(input)
    inputArr.push(Fluid.of('minecraft:water',1000))
    console.log(inputArr);
    addProcessingRecipe('create:filling', output, inputArr)
}
function addMixing(output, input, heatRequirement, processingTime) {
    addProcessingRecipe('create:mixing', output, input, processingTime, heatRequirement)
}
function addProcessingRecipe(type, output, input, processingTime, heatRequirement) {
    if (!processingTime) processingTime = 300
    modpackRecipes.push({
        type: type,
        results: solveResults(output),
        ingredients: solveIngredients(input),
        processingTime: processingTime,
        heatRequirement: heatRequirement
    })
}