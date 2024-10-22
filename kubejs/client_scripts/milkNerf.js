ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    event.cancel(); // don't want to do anything on the client
})
