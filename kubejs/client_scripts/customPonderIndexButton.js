NetworkEvents.dataReceived('open_ponder_index_screen', event => {
    let screen = new global.create.PonderTagIndexScreen()
    global.create.ScreenOpener.open(screen)
})
