// Black Hole Bagels LLC
// 64x fermented blob -> Gourmaryllis 16x sugar canes, water bucket, 4x hoppers
const bcfPlates = getAgreement({
  paymentItems: [
    "32x minecraft:andesite",
    "8x create:belt_connector",
    "8x create:cogwheel",
  ], // This is the result of the trade
  requestedItems: ["64x create:iron_sheet"], // This is the cost of the trade
  title: "We want plates", // This is the title of the trade
  orderedAmount: 2, // This is how many times the trade is done, until the deal is considered complete
  company: "bobs_construction_fleet", // This is the name of the company
  message:
    "Hello, I see you are new here in the trading mesh, doesnt matter much, Im from BCF and we want to contract some white plates, willing to pay too", // This is the description of the trade
});
const bcfPlates2 = getAgreement({
  paymentItems: [
    "32x minecraft:andesite",
    "4x create:andesite_casing",
    "4x create:brass_casing",
    "8x create:copper_casing",
    "4x ae2:chipped_budding_quartz",
  ],
  requestedItems: [
    "64x create:iron_sheet",
    "64x create:iron_sheet",
    "64x create:iron_sheet",
  ],
  title: "We want more plates",
  orderedAmount: 2,
  company: "bobs_construction_fleet",
  message:
    "Hello, you did well on you last contract, good job. We require more plates, this time our volume is bigger, and so is the payment",
});
const bfcPlatesPermanent = getAgreement({
  paymentItems: ["64x andesite", "32x minecraft:andesite"],
  requestedItems: ["64x create:iron_sheet", "64x create:iron_sheet"],
  title: "Plates, fixed rates",
  orderedAmount: 0,
  company: "bobs_construction_fleet",
  message:
    "You have done well, I forsee a long and profitable relationship between us. Now that we have setup a new factory on Zora with the help of mlc, we want fixed rates with you, if you are up for it.",
});
const bfcPickaxes = getAgreement({
  paymentItems: ["64x andesite", "32x minecraft:andesite"],
  requestedItems: ["16x #forge:tools/pickaxes"],
  title: "Tools needed",
  orderedAmount: 0,
  company: "bobs_construction_fleet",
  message:
    "You have done well, I forsee a long and profitable relationship between us. Now that we have setup a new factory on Zora with the help of mlc, we want fixed rates with you, if you are up for it.",
});

// const bcfPlates3 = getAgreement(
const mlcSand = getAgreement({
  paymentItems: [
    "botania:manasteel_shovel",
    "2x botania:rannuncarpus",
    "2x botania:hopperhock",
    "2x botania:mana_pool",
    "botania:mana_spreader",
  ],
  requestedItems: [
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ],
  title: "Your Sand – Our Beaches?",
  orderedAmount: 2,
  company: "magical_landscaping_co",
  message:
    "Hey there, new kid. Heard youre the fresh grain on the block. We at Magical Landscaping Co. are in the biz of building billionaire beachfronts. So, heres the scoop: we need sand. Lots of it. Pristine, untouched, like your rep. Lets make a deal thatl put your sands on the lunar map. Whaddya say?",
});
const bhbCheese = getAgreement({
  paymentItems: [
    "botania:gourmaryllis",
    "water_bucket",
    "4x hopper",
    "16x sugar_cane",
  ],
  requestedItems: ["32x kubejs:fermented_blob"],
  title: "Ingredients needed",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "Hello, we are a new company that is trying to make a new recipe for bagels, we need some ingredients, willing to pay, simple as that",
});
const bnwRedstone = getAgreement({
  paymentItems: [
    Item.of(
      "ae2:energy_cell",
      4,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "8x ae2:fluix_smart_cable",
  ],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Redstone from the red planet",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "Causing quite the stir there arnt you? Your horrific red planet was empty for eons, hope you know what you are doing landing there so spectacularly. Anyways we heard your planet is red because it's made of redstone, so we want to buy some",
});
const bnwManasteel = getAgreement({
  paymentItems: [
    "4x ae2:storage_monitor",
    "32x minecraft:lever",
    "8x minecraft:gold_ingot",
  ],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
  ],
  title: "New material",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "Hello again, we are experimenting with new types of processors based on a more conductive material called manasteel, if you can get us some we can continue this research, we can't pay a lot now, but if this works out we will require much more and our budget will be higher too if you catch my drift",
});
const bnwQuartz = getAgreement({
  paymentItems: ["4x create:brass_casing", "8x minecraft:gold_ingot"],
  requestedItems: ["64x minecraft:quartz"],
  title: "Need raw materials for silicon",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are great partners, you and me, its great to have a reliable source for once. Anyways, we are working on a new batch of silicon, we need some raw material, counting on you. Sidenote, ive talked about you to a few friends of mine, lets just say they are keeping an eye on you, the good kind of eye, dont worry",
});
const bnwCogs = getAgreement({
  paymentItems: [
    "4x create:brass_casing",
    "4x ae2:storage_bus",
    "8x ae2:fluix_smart_cable",
  ],
  requestedItems: ["64x create:cogwheel"],
  title: "Assembly expansion",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const starterDeals = [bcfPlates, mlcSand, bhbCheese];
tradeBranch([bcfPlates2, bnwRedstone], [bcfPlates]);
tradeBranch(bnwManasteel, bnwRedstone);
tradeBranch(bnwQuartz, bnwManasteel);
tradeBranch([bnwCogs, bnwQuartz], [bnwManasteel, bfcPickaxes]);
tradeBranch(
  [bfcPlatesPermanent, bfcPickaxes], //The next trades in line
  [bcfPlates2, mlcSand] //The trades that need to be completed and process for that
);
tradeBranch(bfcPickaxes, bcfPlates2);

ServerEvents.commandRegistry((event) => {
  const {
    commands: Commands,
    arguments: Arguments,
    builtinSuggestions: Suggestions,
  } = event;
  event.register(
    Commands.literal("starterDeals").executes((context) => {
      starterDeals.forEach((deal) =>
        context.getSource().getPlayer().give(deal.item)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("starterDealCompleted").executes((context) => {
      starterDeals.forEach((deal) =>
        context.getSource().getPlayer().give(deal.completedItem)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("allAgreements").executes((context) => {
      global.allAgreements.forEach((deal) =>
        context.getSource().getPlayer().give(deal)
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("speedBoots").executes((context) => {
      global.allAgreements.forEach((deal) =>
        context
          .getSource()
          .getPlayer()
          .give(
            Item.of(
              "iron_boots",
              1,
              '{[{AttributeName:"generic.movementSpeed",Name:"generic.movementSpeed",Amount:10,Operation:1,UUIDMost:81967,UUIDLeast:113041}]}'
            )
          )
      );
      return 0;
    })
  );
});
