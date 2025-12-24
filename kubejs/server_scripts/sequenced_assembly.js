//priority: 1
//Create Prepare to Dye 2 - Sequenced Assembly Recipes

ServerEvents.recipes((event) => {
  // FOOD - pancake assembly (multiple fluid variants)
  ["create:chocolate", "create:honey", "minecraft:milk"].forEach((fluid) => {
    event.recipes.create
      .sequenced_assembly("4x supplementaries:pancake", "create:dough", [
        event.recipes.create.filling("create:dough", [
          Fluid.of(fluid, 200),
          "create:dough",
        ]),
        event.recipes.createDeploying("create:dough", [
          "create:dough",
          "minecraft:egg",
        ]),
        event.recipes.createDeploying("create:dough", [
          "create:dough",
          "minecraft:sugar",
        ]),
        event.recipes.create.pressing("create:dough", "create:dough"),
      ])
      .transitionalItem("create:dough")
      .loops(1);
  });

  // FOOD - pizza assembly
  event.recipes.create
    .sequenced_assembly("ptdye:pizza", "ptdye:pizza_base", [
      event.recipes.create.filling("ptdye:pizza_base", [
        Fluid.of("ptdye:tomato_sauce", 50),
        "ptdye:pizza_base",
      ]),
      event.recipes.createDeploying("ptdye:pizza_base", [
        "ptdye:pizza_base",
        "ptdye:fermented_blob",
      ]),
    ])
    .transitionalItem("ptdye:pizza_base")
    .loops(1);

  // FOOD - sweet roll assembly
  event.remove({ id: "create:filling/sweet_roll" });
  event.recipes.create
    .sequenced_assembly("create:sweet_roll", "minecraft:bread", [
      event.recipes.createDeploying("minecraft:bread", [
        "minecraft:bread",
        "minecraft:sugar",
      ]),
      event.recipes.create.filling("minecraft:bread", [
        Fluid.of("minecraft:milk", 200),
        "minecraft:bread",
      ]),
      event.recipes.createDeploying("minecraft:bread", [
        "minecraft:bread",
        "minecraft:sugar",
      ]),
    ])
    .transitionalItem("minecraft:bread")
    .loops(1);

  // SLIME - slime from dough and lime dye
  event.recipes.create
    .sequenced_assembly("3x minecraft:slime_ball", "create:dough", [
      event.recipes.createDeploying("create:dough", [
        "create:dough",
        "minecraft:lime_dye",
      ]),
    ])
    .transitionalItem("create:dough")
    .loops(3);

  // ALLOY - andesite alloy from iron nugget
  event.recipes.create
    .sequenced_assembly("create:andesite_alloy", "minecraft:iron_nugget", [
      event.recipes.createDeploying("minecraft:iron_nugget", [
        "minecraft:iron_nugget",
        "minecraft:andesite",
      ]),
      event.recipes.create.pressing(
        "minecraft:iron_nugget",
        "minecraft:iron_nugget"
      ),
      event.recipes.create.filling("minecraft:iron_nugget", [
        Fluid.of("create_enchantment_industry:ink", 200),
        "minecraft:iron_nugget",
      ]),
    ])
    .transitionalItem("minecraft:iron_nugget")
    .loops(1);

  // ALLOY - andesite alloy from iron ingot
  event.recipes.create
    .sequenced_assembly("2x create:andesite_alloy", "minecraft:iron_ingot", [
      event.recipes.create.filling("minecraft:iron_ingot", [
        Fluid.of("create_enchantment_industry:ink", 100),
        "minecraft:iron_ingot",
      ]),
      event.recipes.create.filling("minecraft:iron_ingot", [
        Fluid.of("minecraft:milk", 100),
        "minecraft:iron_ingot",
      ]),
    ])
    .transitionalItem("minecraft:iron_ingot")
    .loops(1);

  // CRAFT - precision mechanism alternate
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("create:precision_mechanism").withChance(0.80),
        Item.of("create:brass_sheet").withChance(0.05),
        Item.of("create:andesite_alloy").withChance(0.05),
        Item.of("create:cogwheel").withChance(0.05),
        Item.of("minecraft:clock").withChance(0.05),
      ],
      "create:brass_sheet",
      [
        event.recipes.createDeploying("create:brass_sheet", [
          "create:brass_sheet",
          "minecraft:gold_nugget",
        ]),
        event.recipes.createDeploying("create:brass_sheet", [
          "create:brass_sheet",
          "#forge:cogs",
        ]),
        event.recipes.createDeploying("create:brass_sheet", [
          "create:brass_sheet",
          "#forge:dyes",
        ]),
      ]
    )
    .transitionalItem("create:incomplete_precision_mechanism")
    .loops(4);

  // SLIME - magma cream separation
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("minecraft:slime_ball").withChance(0.90),
        Item.of("minecraft:red_dye").withChance(0.01),
        Item.of("minecraft:orange_dye").withChance(0.01),
        Item.of("minecraft:yellow_dye").withChance(0.01),
        Item.of("minecraft:blaze_powder").withChance(0.07),
      ],
      "minecraft:magma_cream",
      [event.recipes.create.cutting("minecraft:magma_cream", "minecraft:magma_cream")]
    )
    .transitionalItem("minecraft:magma_cream")
    .loops(2);

  // AE2 - silicon from slime
  event.recipes.create
    .sequenced_assembly("3x ae2:silicon", "minecraft:slime_ball", [
      event.recipes.create.pressing(
        "minecraft:slime_ball",
        "minecraft:slime_ball"
      ),
      event.recipes.create.filling("minecraft:slime_ball", [
        Fluid.of("create_enchantment_industry:ink", 250),
        "minecraft:slime_ball",
      ]),
    ])
    .transitionalItem("minecraft:slime_ball")
    .loops(1);

  // RAILWAYS - monorail track alternate
  event.remove({ id: "railways:sequenced_assembly/track_monorail" });
  event.recipes.create
    .sequenced_assembly("32x railways:track_monorail", "create:metal_girder", [
      event.recipes.createDeploying("create:metal_girder", [
        "create:metal_girder",
        "create:metal_girder",
      ]),
    ])
    .transitionalItem("create:incomplete_track")
    .loops(16);

  // ORE - emerald from diamond
  event.remove({ id: "create:smelting/zinc_ingot_from_ore" });
  event.remove({ id: "create:blasting/zinc_ingot_from_ore" });
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("minecraft:emerald").withChance(0.25),
        Item.of("minecraft:green_dye").withChance(0.03),
        Item.of("2x minecraft:green_dye").withChance(0.03),
        Item.of("minecraft:coal").withChance(0.02),
        Item.of("minecraft:diamond").withChance(0.02),
      ],
      "minecraft:diamond",
      [
        event.recipes.createDeploying("minecraft:diamond", [
          "minecraft:diamond",
          "minecraft:green_dye",
        ]),
        event.recipes.create.filling("minecraft:diamond", [
          Fluid.of("create_enchantment_industry:experience", 27),
          "minecraft:diamond",
        ]),
      ]
    )
    .transitionalItem("minecraft:diamond")
    .loops(2);

  // ORE - emerald from mana diamond
  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("minecraft:emerald").withChance(0.25),
        Item.of("minecraft:green_dye").withChance(0.03),
        Item.of("minecraft:coal").withChance(0.02),
      ],
      "botania:mana_diamond",
      [
        event.recipes.createDeploying("botania:mana_diamond", [
          "botania:mana_diamond",
          "minecraft:green_dye",
        ]),
        event.recipes.createDeploying("botania:mana_diamond", [
          "botania:mana_diamond",
          "minecraft:green_dye",
        ]),
        event.recipes.createDeploying("botania:mana_diamond", [
          "botania:mana_diamond",
          "minecraft:green_dye",
        ]),
        event.recipes.create.filling("botania:mana_diamond", [
          Fluid.of("create_enchantment_industry:experience", 27),
          "botania:mana_diamond",
        ]),
      ]
    )
    .transitionalItem("botania:mana_diamond")
    .loops(1);
});
