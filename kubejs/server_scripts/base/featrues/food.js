if (feature('Sweetroll')) {
    removeRecipe({ id: 'create:filling/sweet_roll' })
    addAssembly('create:sweet_roll', 'bread', [
        addDeploying('create:sweet_roll', 'bread', 'sugar'),
        addFilling('create:sweet_roll', 'bread', '200x milk'),
        addDeploying('create:sweet_roll', 'bread', 'sugar')
    ])
}