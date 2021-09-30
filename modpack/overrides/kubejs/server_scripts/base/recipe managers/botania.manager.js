// priority: 100

function solveStateIngredient(block) {
    if (!block) return
    if (!block.includes('[')) {
        return block.startsWith('#')
            ? { type: 'tag', tag: block.slice(1) }
            : { type: 'block', block: block }
    } else {
        let properties = {}
        block.split('[')[1].replace(']', '').split(',').forEach(property => {
            properties[property.split('=')[0]] = property.split('=')[1]
        })
        return {
            type: 'state',
            name: block.split('[')[0],
            properties: properties
        }
    }
}
/**
 * @param {result} output
 * @param {ingredient} input
 * @param {number} mana Amount of mana the recipe uses, defaults to 1000
 * @param {block} catalyst
 */
function addInfusion(output, input, mana, catalyst) {
    if (!mana) mana = 1000
    modpackRecipes.push({
        type: 'botania:mana_infusion',
        input: solveIngredient(input),
        output: solveResult(output),
        mana: mana,
        catalyst: solveStateIngredient(catalyst)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 * @param {number} mana Amount of mana the recipe uses. default(2500)
 */
function addAltar(output, inputs, mana) {
    if (!mana) mana = 2500
    modpackRecipes.push({
        type: 'botania:runic_altar',
        output: solveResult(output),
        mana: mana,
        ingredients: solveIngredients(inputs)
    })
}
/**
 * @param {block} output
 * @param {block} input
 * @param {number} time amount of time in ticks default(150)
 */
function addPurify(output, input, time) {
    let recipeOut = {
        type: 'botania:pure_daisy',
        input: solveStateIngredient(input),
        output: solveStateIngredient(output),
        time: time
    }
    modpackRecipes.push(recipeOut);
}
/**
 * @param {result[]} outputs
 * @param {ingredient[]} inputs
 */
function addElvenTrade(outputs, inputs) {
    modpackRecipes.push({
        type: 'botania:elven_trade',
        ingredients: solveIngredients(inputs),
        output: solveResults(outputs)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 */
function addApothecary(output, inputs) {
    modpackRecipes.push({
        type: 'botania:petal_apothecary',
        output: solveResult(output),
        ingredients: solveIngredients(inputs)
    })
}
/**
 * @param {result} output
 * @param {ingredient[]} inputs
 * @param {number} mana default(100000)
 */
function addTerraPlate(output, inputs, mana) {
    (!mana) ? mana = 100000 :
        modpackRecipes.push({
            type: 'botania:terra_plate',
            result: solveResult(output),
            ingredients: solveIngredients(inputs),
            mana: mana
        })
}