// priority: 100

function addTooltip(stack, tooltip) {
    if (typeof stack === 'string') stack = Item.of(stack)
    if (stack === 'minecraft:air') return
    global.itemTooltips.push([stack, tooltip])
}