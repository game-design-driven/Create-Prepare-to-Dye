ItemEvents.modification(event => {
    event.modify('/.*/', item => {
        if (item.maxStackSize < 32) {
            item.maxStackSize = 32
        }
    })
})