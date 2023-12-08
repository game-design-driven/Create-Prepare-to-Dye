StartupEvents.registry('fluid', event => {
    event.create('fermented_goop')
            .displayName('Fermented Goop')
            .thickTexture(0xE0C3BC)
            .bucketColor(0xE0C3BC)
            .noBlock()
    event.create('organic_mass')
            .displayName('Organic Mass')
            .thickTexture(0x2DB83D)
            .bucketColor(0x2DB83D)
            .noBlock()
})

StartupEvents.registry('item', event => {
    event.create('fermented_blob').displayName('Fermented Blob').food(food => {
		food
    		.hunger(3)
    		.saturation(3)//This value does not directly translate to saturation points gained
      		.fastToEat()//Like dried kelp
      		.meat()//Dogs are willing to eat it
	})
})

StartupEvents.registry('block', event => {
  event.create('ptdye:cobblestone_casing')
  .displayName('Cobblestone Casing')
  .material('stone')
  .soundType('stone')
  .hardness(2)
  .resistance(6)
  .tagBlock('create:wrench_pickup');
})

StartupEvents.registry('block', event => {
  event.create('ptdye:redstone_casing')
  .displayName('Redstone Casing')
  .material('stone')
  .soundType('stone')
  .hardness(2)
  .resistance(6)
  .tagBlock('create:wrench_pickup')
  .opaque(false)
  .notSolid()
  .redstoneConductor(false)
  .fullBlock(false)
  .noValidSpawns(true)
  .suffocating(false)
  .viewBlocking(false)
  .transparent(true)
  .box(0, 0, 0, 16, 4, 16);
})
