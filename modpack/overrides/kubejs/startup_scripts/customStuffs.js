onEvent('fluid.registry', event => {
    event.create('acid').textureThick('0x319A4E').displayName('Acid')
    event.create('oil').color('0xEDE09C').displayName('Oil')
})
onEvent('item.registry', event => {
    event.create('plastic').displayName('Plastic Nurdle').maxStackSize(32).tag('forge:plastic')
})