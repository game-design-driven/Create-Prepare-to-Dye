if (feature('Remove recipes for blocks gotten using varients')) {
    removeRecipe({id: 'create:deploying/large_cogwheel'})
}

if (feature('Remove and add stone cutting for variant recipes')) {
    global.variants.forEach(variant => {
        removeRecipe({output: variant[0]})
        addStonecutting(variant[0],variant[1])
    });
}