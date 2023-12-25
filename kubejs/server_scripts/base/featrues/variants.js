if (feature('Remove and add stone cutting for variant recipes')) {
    global.variants.forEach(variant => {
        removeRecipe({output: variant[0]})
        addStonecutting(variant[0],variant[1])
        addStonecutting(variant[1],variant[0])
    });
}