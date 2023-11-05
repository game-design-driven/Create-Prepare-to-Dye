if (feature('Combine create devices using variants')) {
    //some logic is in quark's config
    replaceShaped('4x create:smart_chute', [' b ','pip',' I '],{
        b:'#forge:plates/brass',
        p:'create:polished_rose_quartz',
        i:'#forge:ingots/iron',
        I:'#forge:plates/iron'
    })
}

if (feature('Remove and add stone cutting for variant recipes')) {
    global.variants.forEach(variant => {
        removeRecipe({output: variant[0]})
        addStonecutting(variant[0],variant[1])
    });
}