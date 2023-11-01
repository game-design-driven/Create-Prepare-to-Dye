// if (feature('Bread')) {
//     addItemExplode('8x create:wheat_flour %50', '#forge:crops/wheat', 50)
// }
if (feature('Sweetroll')) {
    removeRecipe({ id: 'create:filling/sweet_roll' })
    addAssembly('create:sweet_roll', 'bread', [
        addDeploying('create:sweet_roll', 'bread', 'sugar'),
        addFilling('create:sweet_roll', 'bread', '250x milk'),
        addDeploying('create:sweet_roll', 'bread', 'sugar')
    ])
}