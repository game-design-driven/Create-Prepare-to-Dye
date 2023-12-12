
ServerEvents.commandRegistry((event) => {
    const {
        commands: Commands,
    } = event;

    event.register(
        Commands.literal("openPonderIndexScreen").executes((context) => {
            context.getSource().getPlayer().sendData('open_ponder_index_screen');
            return 0;
        })
    );


});