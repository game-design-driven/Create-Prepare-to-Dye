JEIEvents.subtypes(event => {
    // event.useNBT('wares:sealed_delivery_agreement')
    // event.useNBT('wares:completed_delivery_agreement')
    event.useNBTKey('wares:delivery_agreement', 'id')
    event.useNBTKey('wares:completed_delivery_agreement', 'id')
})
