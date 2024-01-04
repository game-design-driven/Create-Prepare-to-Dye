        // Welcome to your newly aquired automaton! Our new models can help you achieve your dreams! The following are important features you should learn before embaking on your exciting new extra terastrial activity!

        // The automaton is indistructible!
        // The automaton has powerful arms that can break any block!
        // The automaton does not eat, does not sleep, and does not break! (terms may apply, no warranty)
        // The automaton can anylise blocks and devices using the patented JADE system!
        // The automaton index is used to lookup device interactions and machine processes!
        // The pattented SUMMERY system is used to provide concise, research based, up to date information about anything you may desire! (unless research was not done and submitted to our network*)
        // The new brass actuator legs will allow the automaton to jump mid air twice! 100% more than last years model!

Ponder.registry((event) => {
    // I dont know where else to move the intro ponder to, need it moved for stone ponder
    event.create("create:clipboard").scene("intro", "Welcome to ChromaPrime", (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        const zombieLink = scene.world.createEntity("zombie", [2.5, 1, 2.5]);
        scene.idle(10);
        scene.text(50, "Welcome to your newly aquired automaton!", [2.5, 3, 2.5])
        scene.idle(60);
        scene.text(50, "Our new models can help you achieve your dreams!", [2.5, 3, 2.5])
        scene.idle(60);
        scene.text(60, "The following are important features you should learn before embaking on your exciting new extra terastrial activity!", [2.5, 3, 2.5])
        scene.idle(70);
        scene.text(60, "The automaton is indistructible!", [2.5, 3, 2.5])
        scene.idle(20);
        scene.world.setBlock([2.5, 1, 2.5], "minecraft:fire", false);
        scene.idle(20);
        scene.world.setBlock([2.5, 1, 2.5], "minecraft:lava", false);
        scene.world.setBlock([2, 1, 2], "minecraft:lava", false);
        scene.world.setBlock([2, 1, 3], "minecraft:lava", false);
        scene.world.setBlock([3, 1, 2], "minecraft:lava", false);
        scene.world.setBlock([3, 1, 3], "minecraft:lava", false);
        scene.world.setBlock([1, 1, 1], "minecraft:lava", false);
        scene.world.setBlock([1, 1, 3], "minecraft:lava", false);
        scene.world.setBlock([1, 1, 2], "minecraft:lava", false);
        scene.world.setBlock([2, 1, 1], "minecraft:lava", false);
        scene.world.setBlock([3, 1, 1], "minecraft:lava", false);
        scene.idle(30);
        scene.world.destroyBlock([2.5, 1, 2.5]);
        scene.world.destroyBlock([2, 1, 2]);
        scene.world.destroyBlock([2, 1, 3]);
        scene.world.destroyBlock([3, 1, 2]);
        scene.world.destroyBlock([3, 1, 3]);
        scene.world.destroyBlock([1, 1, 1]);
        scene.world.destroyBlock([1, 1, 2]);
        scene.world.destroyBlock([1, 1, 3]);
        scene.world.destroyBlock([2, 1, 1]);
        scene.world.destroyBlock([3, 1, 1]);
        scene.idle(30);
        scene.world.setBlock([1, 1, 2], "minecraft:obsidian", true);
        scene.idle(10);
        scene.text(40, "The automaton has powerful arms that can break any block!", [1, 1, 2])
        scene.idle(30);
        scene.world.destroyBlock([1, 1, 2]);
        scene.idle(30);
        scene.world.setBlock([3, 1, 3], "minecraft:red_bed", false);
        scene.world.setBlock([3, 1, 2], "minecraft:red_bed", false);
        scene.idle(10);
        scene.world.setBlock([1, 1, 2], "minecraft:cake", false);
        scene.text(60, "The automaton does not eat, does not sleep, and does not break! (terms may apply, no warranty)", [2.5, 3, 2.5])
        scene.idle(40);
        scene.world.destroyBlock([1, 1, 2]);
        scene.idle(10);
        scene.world.destroyBlock([3, 1, 3]);
        scene.world.destroyBlock([3, 1, 2]);
        scene.idle(30);
        scene.world.setBlock([0, 1, 0], "minecraft:furnace", false);
        scene.idle(10);
        scene.text(50, "The automaton can anylise blocks and devices using the patented JADE system!", [2.5, 3, 2.5])
        scene.idle(60);
        scene.showControls(60, [0, 2.5, 0], "down").rightClick().withItem("hopper");
        scene.idle(30);
        scene.text(50, "The automaton index is used to lookup device interactions and machine processes!", [0, 2, 0])
        scene.idle(60);
        scene.text(70, "The pattented SUMMERY system is used to provide concise, research based, up to date information about anything you may desire! (unless research was not done and submitted to our network*)", [2.5, 3, 2.5])
        scene.idle(80);
        scene.text(50, "The new brass actuator legs will allow the automaton to jump mid air twice! 100% more than last years model!", [2.5, 3, 2.5])
        scene.idle(60);
    });
});