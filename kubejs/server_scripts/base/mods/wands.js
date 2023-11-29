
const keep = [
    'wands:netherite_wand'
]
if (feature('Remove all wands but the netherite one')) {
    Ingredient.of('@wands').itemIds.forEach(item => {
        if (!keep.includes(item)){
            removeItem(item)
        }
    })
}
if (feature('Remove recipe for netherite wand')) {
    removeAllRecipesForItem('wands:netherite_wand')
}