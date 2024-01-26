ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
    event.register(
      Commands.literal("animation")
      .requires(source => source.hasPermission(2))
      .executes((context) => {
        // todo show help
        let player = context.getSource().getPlayer()
        player.tell(Component.ofString("Help for /animation").gold())
        player.tell(
          Component.ofString("  kit").green().append(
            Component.ofString("\n    Gives the blocks and items that are needed for creating animations that aren't available in the creative tab").white())
        );
      }).then(
        Commands.literal("kit")
        .executes((context) => {
          let player = context.getSource().getPlayer()
          player.give("ptdye:animation_block")
          player.give("ptdye:animation_anchor")
          return 0
        })
      ));
})