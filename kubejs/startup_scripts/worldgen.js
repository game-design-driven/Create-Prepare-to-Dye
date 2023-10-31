WorldgenEvents.remove(event => {
  event.printFeatures()
  event.printFeatures('', 'minecraft:plains')
  event.printFeatures('raw_generation')
  event.printFeatures('local_modifications')
  event.printFeatures('underground_structures')
  event.printFeatures('surface_structures', 'minecraft:overworld')
  event.printFeatures('strongholds')
  event.printFeatures('underground_ores')
  event.printFeatures('underground_decoration')
  event.printFeatures('fluid_springs')
  event.printFeatures('vegetal_decoration')
  event.printFeatures('top_layer_modification')
  event.removeFeatureById('vegetal_decoration', [
    'botania:mystical_flowers',
    'botania:mystical_mushrooms'
  ])
  event.removeOres(props => {
    props.blocks = ['minecraft:redstone_ore','minecraft:iron_ore','minecraft:gold_ore', 'minecraft:copper_ore', 'minecraft:lapis_ore', 'minecraft:emerald_ore']
  })  
})

WorldgenEvents.add(event => {
  event.addOre((ore) => {
    ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:iron_ore')
    ore.count([0, 5])
    ore.size = 45
    ore.worldgenLayer = 'underground_ores'
  })
  
  event.addOre((ore) => {
    ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:redstone_ore')
    ore.count([1, 5])
    ore.size = 35
    ore.worldgenLayer = 'underground_ores'
  })
})