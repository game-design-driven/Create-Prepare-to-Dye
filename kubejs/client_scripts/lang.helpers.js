// priority: 100

function addTooltip(stack, tooltip) {
    if (typeof stack === 'string') stack = Item.of(stack)
    global.itemTooltips.push([stack, tooltip])
}