
function addToOrechid(blockToAdd, weight, ignem) {
    if (!weight) weight = 1
    if (weight == 0) weight = undefined
    botaniaOrechidList.push({
        type: "block",
        block: blockToAdd,
        weight: weight
    })
}
function removeFromOrechid(blockToRemove, ignem) { //doesn't work TODO
    addToOrechid(blockToRemove, 0, ignem)
}
