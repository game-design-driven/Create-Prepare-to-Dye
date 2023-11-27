BlockEvents.modification(e => {
    e.modify('quark:crate', block => {
        block.material = 'metal'
        block.soundType = 'metal'
    })
})
