BlockEvents.modification(e => {
    e.modify('/.*/' , block => {
        block.requiresTool = false
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 10
    })
})