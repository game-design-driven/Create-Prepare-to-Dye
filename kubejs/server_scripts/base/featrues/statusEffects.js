if (feature('starter items')) {
    EntityEvents.hurt(event => {
        const {entity,server,damage,source} = event 
        if (entity.player && !source.isBypassInvul()) event.cancel()
    })
}