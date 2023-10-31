if (feature('Bread')) {
    addItemExplode('8x create:wheat_flour %50', '#forge:crops/wheat', 50)
}
if (feature('Sweetroll')) {
    removeRecipe({ id: 'create:filling/sweet_roll' })
    addAssembly('create:sweet_roll', 'bread', [
        addDeploying('', '', 'sugar'),
        addFilling('', '', '250x milk'),
        addDeploying('', '', 'sugar')
    ])
}