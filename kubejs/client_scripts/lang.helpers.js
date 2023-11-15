// priority: 100

function addTooltip(stack, tooltip) {
    if (stack === 'minecraft:air') return
    global.itemTooltips.push([stack, tooltip])
}