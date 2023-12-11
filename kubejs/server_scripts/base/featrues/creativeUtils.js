if (feature('Fly speed increase')) {
    PlayerEvents.loggedIn((event) => {
        Utils.server.runCommandSilent('/create util flySpeed 0.1 @p')
    })
}