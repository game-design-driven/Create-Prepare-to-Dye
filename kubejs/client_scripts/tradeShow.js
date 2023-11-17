JEIEvents.subtypes(event => {
    // Splits recipes in JEI by nbt:
    event.useNBT('wares:delivery_agreement')
    event.useNBT('wares:completed_delivery_agreement')
})
