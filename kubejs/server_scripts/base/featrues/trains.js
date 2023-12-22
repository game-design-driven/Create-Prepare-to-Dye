if (feature('Rail recipes')) {
    replaceShaped('8x rail', ['m m', 'msm', 'm m'], { m: '#forge:ingots/iron', s: 'stick' })
    // replaceShaped('8x powered_rail', ['m m', 'msm', 'mrm'], { m: '#forge:ingots/gold', s: 'stick', r: 'redstone' })
    // replaceShaped('8x activator_rail', ['msm', 'mrm', 'msm'], { m: '#forge:ingots/brass', s: 'stick', r: 'redstone' })
    // replaceShaped('8x detector_rail', ['m m', 'mpm', 'mrm'], { m: '#forge:ingots/brass', p: 'stone_pressure_plate', r: 'redstone' })
    // replaceShaped('8x create:controller_rail', ['m m', 'msm', 'mpm'], { m: '#forge:ingots/brass', p: 'create:polished_rose_quartz', s: 'stick' })
    // addShaped('16x rail', ['m m', 'msm', 'm m'], { m: '#forge:ingots/andesite_alloy', s: 'stick' })
    // addShaped('16x powered_rail', ['m m', 'msm', 'mrm'], { m: '#forge:ingots/andesite_alloy', s: 'stick' ,r: 'redstone' })
    // addShaped('16x activator_rail', ['msm', 'mrm', 'msm'], { m: '#forge:ingots/andesite_alloy', s: 'stick', r: 'redstone' })
    // addShaped('16x detector_rail', ['m m', 'mpm', 'mrm'], { m: '#forge:ingots/andesite_alloy', p: 'stone_pressure_plate', r: 'redstone' })
    
    //assembly for rails will cost more sticks and less ingots
    addAssembly('2x minecraft:rail', '#forge:rods', [
      addDeploying('minecraft:rail', '#forge:rods', 'minecraft:iron_nugget'),
      addDeploying('minecraft:rail', '#forge:rods', 'minecraft:iron_nugget'),
      addDeploying('minecraft:rail', '#forge:rods', 'minecraft:iron_nugget'),
      addDeploying('minecraft:rail', '#forge:rods', '#forge:rods'),
    ],4)
    addAssembly('4x minecraft:rail', '#forge:rods', [
      addDeploying('minecraft:rail', '#forge:rods', '#forge:ingots/andesite_alloy'),
      addDeploying('minecraft:rail', '#forge:rods', '#forge:ingots/andesite_alloy'),
      addDeploying('minecraft:rail', '#forge:rods', '#forge:ingots/andesite_alloy'),
      addDeploying('minecraft:rail', '#forge:rods', '#forge:rods'),
    ],4)
}