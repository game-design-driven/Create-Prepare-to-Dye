ItemEvents.modification((event) => {
    let agreementItems = [
        'wares:delivery_agreement',
        'wares:completed_delivery_agreement',
        'wares:sealed_delivery_agreement',
    ]
    event.modify(agreementItems, (item) => {
        item.setFireResistant(true);
    });
});
