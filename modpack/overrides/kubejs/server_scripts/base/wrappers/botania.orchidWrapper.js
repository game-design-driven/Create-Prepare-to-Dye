
function addToOrechid(blockToAdd, weight, ignem) {
    if (!weight) weight = 1
    botaniaOrechidList.push({
        type: "block",
        block: blockToAdd,
        weight: weight
    })
}
