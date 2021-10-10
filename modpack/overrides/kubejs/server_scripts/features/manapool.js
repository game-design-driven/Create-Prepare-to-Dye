if (global.feature('Remove conjuration catalyst stuff')) {
    removeRecipe({ id: '/^.*dupe.*$/' })
    removeRecipe({ id: 'botania:mana_infusion/grass' })
    removeItem('botania:conjuration_catalyst')
}
if (global.feature('Make alchemy recipes use blaze burner')) {
    removeItem('botania:alchemy_catalyst')
    forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
        let json = recipe.json;
        if (json.get('catalyst') === '{"type":"block","block":"botania:alchemy_catalyst"}') {
            console.log("alchemy_catalyst " + json.get('mana'));
            addAlchemyRecipe(json.get('output'), json.get('input'), parseInt(json.get('mana')))
            removeRecipe({ id: recipe.getId() })
        }
    })
}
if (global.feature('More infusion recipes')) {
    addInfusion('kelp', 'sugar_cane')
}
function addAlchemyRecipe(output, input, mana) {
    addInfusion(output, input, mana, 'create:blaze_burner[blaze=fading]')
    addInfusion(output, input, mana * 5, 'create:blaze_burner[blaze=kindled]')
}