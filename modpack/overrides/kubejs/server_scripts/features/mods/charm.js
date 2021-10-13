if (feature('charm removal')) {
    removeItems(["charm:kiln", "charm:refined_obsidian_stairs", "charm:refined_obsidian_slab", "charm:refined_obsidian_wall", "charm:glowball",])
       
}

if (feature('netherite nugget twiks')) {
    removeRecipe({ output: "charm:netherite_nugget" })
    addShapeless("6x charm:netherite_nugget", "#forge:ingots/netherite")
    addAssembly("9x charm:netherite_nugget", "minecraft:netherite_ingot", [
        addFilling('', '', '25x contenttweaker:acid'),
        addFilling('', '', '999x minecraft:water')
    ])
    addInfusion("9x charm:netherite_nugget", "forge:ingots/netherite", undefined, "minecraft:bedrock")
}