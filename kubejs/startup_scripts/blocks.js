StartupEvents.registry('fluid', event => {
    event.create('fermented_goop')
            .displayName('Fermented Goop')
            .thickTexture(0xE0C3BC)
            .bucketColor(0xE0C3BC)
            .noBlock()
})

StartupEvents.registry('item', event => {
    event.create('fermented_blob').displayName('Fermented Blob')
})