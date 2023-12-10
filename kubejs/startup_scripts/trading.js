if (feature("Trading platforms")) {
    StartupEvents.registry("block", event => {
        event.create("ptdye:upside_down_fire")
        .displayName("Upside-Down Fire")
        .material("fire")
        .hardness(0)
        .resistance(0)
        .renderType("cutout")
        .lightLevel(15)
        .opaque(false)
        .notSolid()
        .noCollision()
        .noItem();
    });

    StartupEvents.registry("item", event => {
        event.create("ptdye:trading_transceiver")
        .displayName("United SPACE consumer union plus plus® Oscar-Delta™ class Trading Platform® request transceiver")
        .unstackable()
        .rarity("epic")
        .group("tools");
    });

    BlockEvents.modification(event => {
        event.modify("wares:delivery_table", block => {
            block.destroySpeed = -1;
            block.explosionResistance = 3600000;
        })
    });
}
