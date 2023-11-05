if (feature('Remove recipes for blocks gotten using varients')) {
    removeRecipe({id: 'create:deploying/large_cogwheel'})
}

global.variants.forEach(variant => {
    removeRecipe({output: variant[0]})
    if (Item.of(variant[0]).id=='minecraft:air') return;
    if (Item.of(variant[1]).id=='minecraft:air') return;
    addStonecutting(variant[0],variant[1])
});