BlockEvents.modification(e => {
    e.modify('/.*/' , block => {
        block.requiresTool = false
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 10
    })
    e.modify('/^quark:iron_plate.*/', block => {
        block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 20
    })    
})

