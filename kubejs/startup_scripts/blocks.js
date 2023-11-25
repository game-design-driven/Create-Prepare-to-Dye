StartupEvents.registry('fluid', event => {
    event.create('fermented_goop')
            .displayName('Fermented Goop')
            .thickTexture(0xE0C3BC)
            .bucketColor(0xE0C3BC)
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