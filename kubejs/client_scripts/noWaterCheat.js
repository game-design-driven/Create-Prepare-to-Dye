ItemEvents.rightClicked('bottle',(event) => {
    if (event.target.block.id === 'minecraft:water') {
        event.cancel()
    }
});