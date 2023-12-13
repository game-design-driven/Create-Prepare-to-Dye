
ServerEvents.commandRegistry((event) => {
    const {
        commands: Commands,
    } = event;

    event.register(
        Commands.literal("openPonderIndex").executes((context) => {
            context.getSource().getPlayer().sendData('open_ponder_index_screen');
            return 0;
        })
    );


});