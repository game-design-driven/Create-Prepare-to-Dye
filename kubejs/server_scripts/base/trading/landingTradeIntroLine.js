// Black Hole Bagels LLC
// 64x fermented blob -> Gourmaryllis 16x sugar canes, water bucket, 4x hoppers
const bcfPlates = getAgreement(
  ["32x andesite", "8x create:belt_connector", "8x create:cogwheel"], // This is the result of the trade
  ["64x create:iron_sheet"], // This is the cost of the trade
  "We want plates", // This is the title of the trade
  2, // This is how many times the trade is done, until the deal is considered complete
  "bobs_construction_fleet", // This is the name of the company
  "Hello, I see you are new here in the trading mesh, doesnt matter much, Im from BCF and we want to contract some white plates, willing to pay too" // This is the description of the trade
);
const bcfPlates2 = getAgreement(
  [
    "32x andesite",
    "4x create:andesite_casing",
    "4x create:brass_casing",
    "8x create:copper_casing",
    "4x ae2:chipped_budding_quartz",
  ],
  ["64x create:iron_sheet", "64x create:iron_sheet", "64x create:iron_sheet"],
  "We want more plates",
  2,
  "bobs_construction_fleet",
  "Hello, you did well on you last contract, good job. We require more plates, this time our volume is bigger, and so is the payment"
);
const bfcPlatesPermanent = getAgreement(
  ["64x andesite", "32x andesite"],
  ["64x create:iron_sheet", "64x create:iron_sheet"],
  "Plates, fixed rates",
  0,
  "bobs_construction_fleet",
  "You have done well, I forsee a long and profitable relationship between us. Now that we have setup a new factory on Zora with the help of mlc, we want fixed rates with you, if you are up for it."
);

// const bcfPlates3 = getAgreement(
const mlcSand = getAgreement(
  [
    "botania:manasteel_shovel",
    "2x botania:rannuncarpus",
    "2x botania:hopperhock",
    "2x botania:mana_pool",
    "botania:mana_spreader",
  ],
  [
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ],
  "Your Sand – Our Beaches?",
  2,
  "magical_landscaping_co",
  "Hey there, new kid. Heard youre the fresh grain on the block. We at Magical Landscaping Co. are in the biz of building billionaire beachfronts. So, heres the scoop: we need sand. Lots of it. Pristine, untouched, like your rep. Lets make a deal thatl put your sands on the lunar map. Whaddya say?"
);
const bhbCheese = getAgreement(
  ["botania:gourmaryllis", "water_bucket", "4x hopper", "16x sugar_cane"],
  ["32x kubejs:fermented_blob"],
  "Ingredients needed",
  2,
  "black_hole_bagels_llc",
  "Hello, we are a new company that is trying to make a new recipe for bagels, we need some ingredients, willing to pay, simple as that"
);
// const igtPaper = getAgreement(
//   ['']
const starterDeals = [bcfPlates, mlcSand, bhbCheese];
const tempWreckedSpaceship = Item.of(
  "supplementaries:sack",
  '{BlockEntityTag:{CustomName:\'{"text":"Wrecked Spaceship"}\',ForgeCaps:{},Items:[{Count:1b,Slot:0b,id:"minecraft:stonecutter"},{Count:8b,Slot:1b,id:"create:andesite_casing"},{Count:8b,Slot:2b,id:"create:brass_casing"},{Count:1b,Slot:3b,id:"minecraft:cow_spawn_egg"},{Count:1b,Slot:4b,id:"createdieselgenerators:diesel_engine"},{Count:8b,Slot:5b,id:"create:copper_casing"},{Count:4b,Slot:6b,id:"minecraft:bucket"},{Count:16b,Slot:7b,id:"create:belt_connector"},{Count:16b,Slot:8b,id:"create:andesite_alloy"}]},display:{Name:\'{"text":"Wrecked Spaceship","italic":"false"}\'}}'
);
const tempWreckedSpaceship2 = Item.of(
  "supplementaries:sack",
  '{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"botania:floating_pure_daisy"},{Count:1b,Slot:1b,id:"minecraft:lava_bucket"},{Count:1b,Slot:2b,id:"minecraft:lava_bucket"},{Count:1b,Slot:3b,id:"createdieselgenerators:basin_lid"},{Count:1b,Slot:6b,id:"create:basin"}]},display:{Name:\'{"text":"Wrecked Spaceship","italic":"false"}\'}}'
);
tradeBranch(
  [bcfPlates2], 
  [bcfPlates]
);
tradeBranch(
  [bfcPlatesPermanent], //The next trades in line
  [bcfPlates2, mlcSand] //The trades that need to be completed and process for that
);
PlayerEvents.loggedIn((event) => {
  // if (!event.hasGameStage("starter_deals")) {
  //   event.addGameStage("starter_deals");
  //   starterDeals.forEach((deal) => event.player.give(deal.item));
  //   event.player.give(tempWreckedSpaceship);
  //   event.player.give(tempWreckedSpaceship2);
  // }
});

ServerEvents.commandRegistry((event) => {
  event.register(
      Commands.literal("starterDeals").executes((context) => {
        starterDeals.forEach((deal) => context.getSource().getPlayer().give(deal.item));
        return 0;
      })
  )
});