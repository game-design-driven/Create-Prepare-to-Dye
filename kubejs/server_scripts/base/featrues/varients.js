if (feature('Remove recipes for blocks gotten using varients')) {
    removeRecipe({id: 'create:deploying/large_cogwheel'})
}

global.variants.forEach(variant => {
    removeRecipe({output: variant[0]})
    addStonecutting(variant[0],variant[1])
});