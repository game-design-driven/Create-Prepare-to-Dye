ItemEvents.rightClicked('minecraft:glass_bottle',(event) => {
    if (event.target.block.id === 'minecraft:water') {
        event.cancel()
    }
});