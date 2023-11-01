BlockEvents.modification(e => {
    e.modify('/.*/' , block => {
        block.requiresTool = false
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 3
        console.info("Modifying " + block.id + " to have a destroy speed of " + Block.getBlock(block.id).defaultDestroyTime() / 2)
    })
})