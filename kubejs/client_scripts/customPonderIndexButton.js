const $PonderTagIndexScreen = Java.loadClass('com.simibubi.create.foundation.ponder.ui.PonderTagIndexScreen')
const $PauseScreen = Java.loadClass('net.minecraft.client.gui.screens.PauseScreen')
const $ScreenOpener = Java.loadClass('com.simibubi.create.foundation.gui.ScreenOpener')

NetworkEvents.dataReceived('open_ponder_index_screen', event => {
    let screen = new $PonderTagIndexScreen()
    $ScreenOpener.open(screen)
})
