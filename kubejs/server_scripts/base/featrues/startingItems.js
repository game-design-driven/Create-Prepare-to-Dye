if (feature('starter items')) {
    PlayerEvents.loggedIn((event) => {
        if (!event.player.getPersistentData().getBoolean('starter'))
        {
            event.player.give(Item.of('create:wrench', 1))
            event.player.getPersistentData().putBoolean('starter', false)
        }
    })
}