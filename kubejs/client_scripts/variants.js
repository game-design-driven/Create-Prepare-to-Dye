JEIEvents.hideItems((event) => {
    global.variants.forEach(variant => {
        event.hide(variant[0]);
    })
});
