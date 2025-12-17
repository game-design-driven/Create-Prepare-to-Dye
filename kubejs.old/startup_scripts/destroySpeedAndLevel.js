BlockEvents.modification(e => {
    e.modify('/.*/' , block => {
        block.requiresTool = false
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 11
    })
    e.modify('/^quark:iron_plate.*/', block => {
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 30
    })    
})

