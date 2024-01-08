// function getTradeNbtNameFilter(item) {
//   console.log(`getting trade nbt name filter for ${item.getNbt()}`)
//   return Item.of(item.id).withName(item.nbt.get("display").get("Name")).weakNBT();
// }
// addMixing(
//   "stick",
//   getTradeNbtNameFilter(
//     Item.of("minecraft:stick", 2, "{Damage:0}").withName("Trading Transceiver")
//   )
// );
const bcfPlates = getAgreement("bcfPlates", {
  paymentItems: [
    "32x minecraft:andesite",
    "10x create:cogwheel",
    "8x create:belt_connector",
  ], // This is the result of the trade
  requestedItems: ["64x create:iron_sheet"], // This is the cost of the trade
  title: "We want plates", // This is the title of the trade
  orderedAmount: 3, // This is how many times the trade is done, until the deal is considered complete
  company: "bobs_construction_fleet", // This is the name of the company
  message:
    "Hello, I see you are new here in the trading mesh, doesnt matter much, Im from BCF and we want to contract some white plates, willing to pay too", // This is the description of the trade
});
const bcfPlates2 = getAgreement("bcfPlates2", {
  paymentItems: [
    "16x minecraft:andesite",
    "16x ptdye:sealed_device",
    "10x ae2:flawed_budding_quartz",
    "32x ptdye:mechanical_device",
    "16x ptdye:smart_device",
    "create:super_glue",
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
const bfcPlatesPermanent = getAgreement("bfcPlatesPermanent", {
  paymentItems: ["64x andesite", "32x minecraft:andesite"],
  requestedItems: ["64x create:iron_sheet", "64x create:iron_sheet"],
  title: "Plates, fixed rates",
  orderedAmount: 0,
  company: "bobs_construction_fleet",
  message:
    "You have done well, I forsee a long and profitable relationship between us. Now that we have setup a new factory on Zora with the help of mlc, we want fixed rates with you, if you are up for it.",
});
const bfcPickaxes = getAgreement("bfcPickaxes", {
  paymentItems: ["32x create:track", "8x ptdye:locomotive_device"],
  requestedItems: ["16x #forge:tools/pickaxes"],
  title: "Tools needed",
  orderedAmount: 2,
  company: "bobs_construction_fleet",
  message:
    "Planing to do some work for some computer company on Zora, we need some tools",
});
const bfcHelmets = getAgreement("bfcHelmets", {
  paymentItems: ["16x ptdye:locomotive_device", "16x create:track"],
  requestedItems: ["16x minecraft:iron_helmet"],
  title: "Hardhats",
  orderedAmount: 2,
  company: "bobs_construction_fleet",
  message:
    "We also need some hardhats for our upcoming contract, less urgent though so take your time",
});
// const bcfPlates3 = getAgreement(
const mlcEndstoneFixed = getAgreement("mlcEndstoneFixed", {
  paymentItems: ["8x quark:chorus_fruit_block"],
  requestedItems: ["32x minecraft:end_stone"],
  title: "Building a moon, materials needed",
  orderedAmount: 0,
  company: "magical_landscaping_co",
  message:
    "We have a long term project going, building a moon for a rich client of ours, we need a lot of moonstone, we can supply you with some chorus fruit in return",
});
const mlcSand = getAgreement("mlcSand", {
  paymentItems: [
    // "botania:manasteel_shovel",
    Item.of("minecraft:golden_pickaxe", 2, "{Damage:0}"),
    Item.of("minecraft:diamond_pickaxe", 2, "{Damage:0}"),
    "16x gold_ingot",
    "16x ptdye:mechanical_device",
    "8x create:iron_sheet",
    "2x botania:hopperhock",
  ],
  requestedItems: [
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
    "64x minecraft:white_concrete_powder",
  ],
  title: "Your Sand Our Beaches?",
  orderedAmount: 2,
  company: "magical_landscaping_co",
  message:
    "Hey, new kid. Heard youre the fresh grain on the block. We are in the biz of building billionaire beachfronts. So, heres the scoop: we need sand. Lots of it. Pristine, white, untouched, like your manufacturing rep. Lets make a deal that will put your sands on the lunar map. Whaddya say?",
});
const mlcSand2 = getAgreement("mlcSand2", {
  paymentItems: [
    Item.of("minecraft:golden_pickaxe", 4, "{Damage:0}"),
    "64x dirt",
    "16x supplementaries:jar",
    "8x ptdye:smart_device",
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ],
  title: "More sand!",
  orderedAmount: 3,
  company: "magical_landscaping_co",
  message:
    "Your sand is smooth like no other! We want to buy MORE of it, not white this time, regular clean sand, and a bunch more, lets get this going shall we?",
});
const mlcSandFixed = getAgreement("mlcSandFixed", {
  paymentItems: [
    Item.of("minecraft:golden_pickaxe", 16, "{Damage:0}"),
    "64x minecraft:cobblestone",
  ],
  requestedItems: [
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
    "64x minecraft:sand",
  ],
  title: "Lets seal the deal on that beautiful sand",
  orderedAmount: 5,
  company: "magical_landscaping_co",
  message:
    "Alright this is a done deal. Lets have a relationship you and I, lets start a constant thing, lets tell the family. First lets make sure we got solid lines right? Consider us partners forever, you keep sending us your golden dust and we are happy bees",
});
const bhbCheese = getAgreement("bhbCheese", {
  paymentItems: [
    "16x minecraft:sugar_cane",
    "2x botania:mana_pool",
    "botania:mana_spreader",
    "1x botania:gourmaryllis",
    "1x minecraft:water_bucket",
    "1x minecraft:water_bucket",
  ],
  requestedItems: ["64x kubejs:fermented_blob"],
  title: "Ingredients needed",
  orderedAmount: 3,
  company: "black_hole_bagels_llc",
  message:
    "Hello, we are a new company that is trying to make a new recipe for bagels, we need some ingredients, willing to pay, simple as that",
});
const bhbCheeseFixed = getAgreement("bhbCheeseFixed", {
  paymentItems: ["32x supplementaries:soap"],
  requestedItems: ["64x kubejs:fermented_blob", "32x kubejs:fermented_blob"],
  title: "Lets make some bagels",
  orderedAmount: 0,
  company: "black_hole_bagels_llc",
  message:
    "Alright, yup, this works. I want more of that cheesy stuff, a lot more. Lets make this a regular thing",
});
const bhbWheat = getAgreement("bhbWheat", {
  paymentItems: ["32x botania:livingwood_log", "water_bucket"],
  requestedItems: ["64x wheat"],
  title: "Clean wheat needed",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "Currently we are getting our wheat from Qube, we are not 100% where they are getting it but it always comes stained with blood, we have a line dedicated to cleaning just because of that. If you can supply clean wheat, I think we can be great friends",
});

const wscAxes = getAgreement("wscAxes", {
  paymentItems: [
    "16x minecraft:oak_log",
    "10x storagedrawers:oak_full_drawers_1",
    "2x minecraft:chest",
    "ptdye:trading_transceiver",
  ],
  requestedItems: ["16x #forge:tools/axes"],
  title: "A new season is upon us, Tools needed",
  orderedAmount: 1,
  company: "wood_strike_and_co",
  message:
    "Hey there, hoser. Were the fun folks at WSC busier than a beaver in a woodpile! Our tools are top notch, but we're short a few axes. Need more to chop chop as fast as a moose on a ski slope. Can you help us out?",
});
const wscBread = getAgreement("wscBread", {
  paymentItems: [
    "8x minecraft:birch_log",
    "minecraft:chest",
    "4x storagedrawers:oak_full_drawers_1",
  ],
  requestedItems: ["64x minecraft:bread"],
  title: "Food needed for the workers",
  orderedAmount: 2,
  company: "wood_strike_and_co",
  message:
    "Its WSC here. After any long day among the pines, our teams as hungry as a bear in spring! Were on the hunt for some good, hearty food to fill our bellies and fuel our saws. Barring that, bread would do as well",
});
const wscBreadAndAxesFixed = getAgreement("wscBreadAndAxesFixed", {
  paymentItems: ["8x minecraft:birch_log"],
  requestedItems: ["64x minecraft:bread", "16x #forge:tools/axes"],
  title: "Food and tools, fixed rates",
  orderedAmount: 0,
  company: "wood_strike_and_co",
  message:
    "We are reaching out for a bit of a deal. We're looking to set up a fixed rate for two essentials: good, sturdy axes and plenty of bread to keep our crew well fed. We're thinking long term partnership here, with regular orders. Let's talk numbers and see if we can make this work for both of us. Looking forward to a fruitful collaboration",
});
const bhbFurnaces = getAgreement("bhbFurnaces", {
  paymentItems: [
    "8x minecraft:clay",
    "8x copper_ingot",
    "8x botania:manasteel_ingot",
  ],
  requestedItems: ["64x minecraft:furnace"],
  title: "Expanding our presence on Zora",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "We are expanding our presence on Zora, we need some furnaces, you have proven yourself so far, lets see if we can work some fixed rates for your wheat after this",
});
const bhbWheatFixedRates = getAgreement("bhbWheatFixedRates", {
  paymentItems: ["32x clay"],
  requestedItems: ["64x wheat", "64x wheat"],
  title: "Clean wheat fixed rates",
  orderedAmount: 0,
  company: "black_hole_bagels_llc",
  message:
    "Alright, you are our new main source now, dont fail us, and dont worry about Qube, we wont tell them",
});
const bnwRedstone = getAgreement("bnwRedstone", {
  paymentItems: [
    Item.of(
      "ae2:energy_cell",
      2,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "16x ae2:fluix_smart_cable",
    "4x ptdye:logic_device",
  ],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Redstone needed",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "Causing quite the stir there arnt you? Your horrific dead planet was empty for eons, hope you know what you are doing landing there so spectacularly. Anyways we heard you might be a solid supplier, so we would like to buy some redstone from you",
});
const bnwRedstoneFixedRates = getAgreement("bnwRedstoneFixedRates", {
  paymentItems: ["8x ae2:fluix_smart_cable"],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Fixed rates redstone > cables",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Alright, you seem to be reliable, I believe it is time we made it official, lets start a fixed rates agreement. Your redstone is high quality, we make great cables, simple as that",
});
const bnwManasteel = getAgreement("bnwManasteel", {
  paymentItems: [
    "4x ae2:storage_monitor",
    Item.of(
      "ae2:energy_cell",
      1,
      "{internalCurrentPower:200000.0d,internalMaxPower:200000.0d}"
    ),
    "8x minecraft:lever",
    "8x minecraft:gold_ingot",
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
  ],
  title: "New material",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "Hello again, we are experimenting with new types of processors based on a more conductive material, if you can get us some we can continue this research, we can't pay a lot now, but if this works out we will require much more and our budget will be higher too if you catch my drift",
});
const bnwManasteelFixedRates = getAgreement("bnwManasteelFixedRates", {
  paymentItems: ["8x ptdye:logic_device"],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "32x botania:manasteel_ingot",
  ],
  title: "Fixed rates Blue > Logic Device",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Well, well, seems that this blue stuff is working really well for us, we are going to need a lot more, lets fix our rates, we can supply you with electronics, you can supply us with this new material",
});
const bnwManasteelFixedRates2 = getAgreement("bnwManasteelFixedRates2", {
  paymentItems: ["32x ptdye:logic_device"],
  requestedItems: [
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
    "64x botania:manasteel_ingot",
  ],
  title: "Fixed rates Blue > Logic Device",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "If you prefer we pay in electronics, we are more than happy to. Just get us more of the blue stuff",
});
const bnwQuartz = getAgreement("bnwQuartz", {
  paymentItems: [
    "8x ptdye:smart_device",
    "8x minecraft:gold_ingot",
    "2x ptdye:logic_device",
  ],
  requestedItems: ["64x minecraft:quartz"],
  title: "Need raw materials for silicon",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are great partners, you and me, its great to have a reliable source for once. Anyways, we are working on a new batch of silicon, we need some raw material, counting on you. Sidenote, ive talked about you to a few friends of mine, lets just say they are keeping an eye on you, the good kind of eye, dont worry",
});

const bnwCogs = getAgreement("bnwCogs", {
  paymentItems: [
    "8x ptdye:smart_device",
    "8x ae2:fluix_smart_cable",
    "5x ae2:storage_bus",
    "2x ae2:toggle_bus",
  ],
  requestedItems: ["64x create:cogwheel"],
  title: "Assembly expansion",
  orderedAmount: 2,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const bnwPolishedRoseQuartz = getAgreement("bnwPolishedRoseQuartz", {
  paymentItems: [
    "8x ae2:fluix_smart_cable",
    "4x create:mechanical_arm",
    "4x ae2:storage_bus",
    "4x ptdye:logic_device",
  ],
  requestedItems: ["64x create:polished_rose_quartz"],
  title: "Assembly expansion",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const qubeAngry = getAgreement("qubeAngry", {
  paymentItems: ["minecraft:air"],
  requestedItems: [bhbWheatFixedRates.item],
  title: "Who do you think you are?!",
  orderedAmount: 1,
  company: "qube",
  message:
    "You sun of a squid, thought we woudnt find out? Who do you think you are? Waltzing over to our system and changing things around, this is unacceptable. Know this, if you want ANY trade from REAL companies around here give up this contract NOW and you will be forgiven, we may talk then",
});

const qubeSturdyDevice = getAgreement("qubeSturdyDevice", {
  paymentItems: [
    "64x gold_ingot",
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:fortune", 1)
      .withCount(3),
  ],
  requestedItems: ["64x ptdye:sturdy_device"],
  title: "Sturdy devices required",
  orderedAmount: 2,
  company: "qube",
  message:
    "It is time to prove your worth, we are expanding some facilities and need some devices, lets see how your production lines hold up with our orders",
});

const qubeLogicDevice = getAgreement("qubeLogicDevice", {
  paymentItems: [
    "64x gold_ingot",
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:silk_touch", 1)
      .withCount(2),
  ],
  requestedItems: ["64x ptdye:logic_device", "64x ptdye:logic_device"],
  title: "Logic devices in good condition required",
  orderedAmount: 4,
  company: "qube",
  message:
    "Alright, it does seem like your factories are at least competent enough for this, so please make us some logic devices",
});

const qubeLogicDevice2 = getAgreement("qubeLogicDevice2", {
  paymentItems: [
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:looting", 1)
      .withCount(2),
    "5x minecraft:netherite_sword",
  ],
  requestedItems: [
    "64x ptdye:logic_device",
    "64x ptdye:logic_device",
    "64x ptdye:logic_device",
  ],
  title: "More logic devices in good condition required",
  orderedAmount: 3,
  company: "qube",
  message: "You already know what you need to do, please do not be late",
});

const qubeTrack = getAgreement("qubeTrack", {
  paymentItems: [
    "32x minecraft:deepslate_diamond_ore",
    "64x create:experience_nugget",
    Item.of("minecraft:enchanted_book").enchant("minecraft:sharpness", 3),
  ],
  orderedAmount: 2,
  company: "qube",
  requestedItems: [
    "64x create:track",
    "64x create:track",
    "64x create:track",
    "64x create:track",
  ],
  title: "Tracks required",
  message:
    "Our expanded facilities need more logistic solutions, it is crucial that we have high quality tracks provided as soon as possible",
});

const qubeLocomotiveDevice = getAgreement("qubeLocomotiveDevice", {
  paymentItems: [
    Item.of("minecraft:enchanted_book").enchant("minecraft:fire_aspect", 2),
    "64x gold_ingot",
    "16x minecraft:netherite_ingot",
  ],
  requestedItems: ["32x ptdye:locomotive_device"],
  title: "Locomotive devices required",
  orderedAmount: 4,
  company: "qube",
  message:
    "Our original supplier for locomotive devices has been having some issues, if you are present to fill in the gap we are likely to be pleased",
});

const qubeTrackFixed = getAgreement("qubeTrackFixed", {
  paymentItems: ["32x minecraft:deepslate_diamond_ore"],
  requestedItems: ["64x create:track", "64x create:track", "64x create:track"],
  title: "Tracks required, fixed rates",
  orderedAmount: 0,
  company: "qube",
  message:
    "You have proven yourself, we are willing to make this a regular thing, we will supply you with some some valuable ore, you will supply us with tracks. Do not fail us",
});

const qubeWheat = getAgreement("qubeWheat", {
  paymentItems: ["64x clay", "64x clay", "64x clay", "16x gold_ingot"],
  requestedItems: [
    "64x wheat",
    "64x wheat",
    "64x wheat",
    "64x wheat",
    "64x wheat",
    "64x wheat",
  ],
  company: "qube",
  title: "Wheat required",
  orderedAmount: 4,
  message:
    "While the wheat produced by us is in great shape as always, we are after a supplementry stream of more wheat",
});
const qubeWheatFixed = getAgreement("qubeWheatFixed", {
  paymentItems: ["64x clay", "64x clay", "64x clay"],
  requestedItems: [
    "64x wheat",
    "64x wheat",
    "64x wheat",
    "64x wheat",
    "64x wheat",
    "64x wheat",
  ],
  title: "Wheat required, fixed rates",
  orderedAmount: 0,
  company: "qube",
  message:
    "It does seem that your wheat production is doing well enough and it did not fail too many of our standards. We are going to expect further shipments",
});

const qubeGlass = getAgreement("qubeGlass", {
  paymentItems: [
    "16x gold_ingot",
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:unbreaking", 1)
      .withCount(3),
  ],
  requestedItems: [
    "64x minecraft:glass",
    "64x minecraft:glass",
    "64x minecraft:glass",
    "64x minecraft:glass",
  ],
  title: "Glass required, do not be late",
  orderedAmount: 3,
  company: "qube",
  message:
    "You seem to be doing well so far, we need glass, a large amount. Please get it to us, and quickly, we are not known to be patient around here",
});
const qubeBetterGlass = getAgreement("qubeBetterGlass", {
  paymentItems: [
    "16x gold_ingot",
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:unbreaking", 1)
      .withCount(4),
  ],
  requestedItems: ["64x botania:mana_glass", "64x botania:mana_glass"],
  title: "Glass required, of better quality this time",
  orderedAmount: 10,
  company: "qube",
  message:
    "Your glass seemed to be good enough at best, while we appreciate any effort, we require a higher quality around here, please do better",
});
const qubeWeapons = getAgreement("qubeWeapons", {
  paymentItems: [
    "16x gold_ingot",
    Item.of("minecraft:enchanted_book").enchant("minecraft:sweeping", 1),
    Item.of("minecraft:enchanted_book").enchant("minecraft:smite", 1),
    Item.of("minecraft:enchanted_book").enchant("create:capacity", 1),
    Item.of("minecraft:enchanted_book").enchant("minecraft:sharpness", 1),
  ],
  requestedItems: [
    Item.of("minecraft:netherite_sword", "{Damage:0}").withCount(16),
  ],
  title: "Weaponry Required",
  orderedAmount: 2,
  company: "qube",
  message:
    "You will supply us with weapons, black ones. Make sure to not have them dirty in any way.",
});
const qubeWeaponsEnchanted = getAgreement("qubeWeaponsEnchanted", {
  paymentItems: ["64x gold_ingot", "64x book"],
  requestedItems: [
    Item.of("minecraft:golden_sword", "{Damage:0}")
      .enchant("minecraft:sharpness", 1)
      .withCount(16),
  ],
  orderedAmount: 2,
  company: "qube",
  title: "Enchanted weaponry required",
  message:
    "Your black weaponry has proven itself adequate, we are now looking for enchanted weaponry, we will supply you with some gold and books, you will supply us with extra sharp yellow swords",
});
const qubeWeaponsEnchantedFixed = getAgreement("qubeWeaponsEnchanted", {
  paymentItems: ["64x book", "64x book"],
  requestedItems: [
    Item.of("minecraft:golden_sword", "{Damage:0}")
      .enchant("minecraft:sharpness", 1)
      .withCount(16),
  ],
  orderedAmount: 0,
  company: "qube",
  title: "Enchanted Weaponry fixed rates",
  message: "We will keep this line of enchanted weapons going",
});
const qubeWeaponsEnchantedLootingFixed = getAgreement("qubeWeaponsEnchanted", {
  paymentItems: ["64x book", "64x book", "64x book", "32x gold_ingot"],
  requestedItems: [
    Item.of("minecraft:golden_sword", "{Damage:0}")
      .enchant("minecraft:looting", 2)
      .withCount(16),
  ],
  orderedAmount: 0,
  company: "qube",
  title: "Enchanted Looting Weaponry fixed rates",
  message:
    "Lets have a line of looting swords as well, this will serve us well, both of us that is",
});
const qubeBetterGlassFixed = getAgreement("qubeBetterGlassFixed", {
  paymentItems: [
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:unbreaking", 1)
      .withCount(2),
  ],
  requestedItems: [
    "64x botania:mana_glass",
    "64x botania:mana_glass",
    "64x botania:mana_glass",
  ],
  title: "Glass required, fixed rates",
  orderedAmount: 0,
  company: "qube",
  message:
    "Good. The quality of your glass will suffice, you will sell more of it, on a regular basis",
});
const gbdSticks = getAgreement("gbdSticks", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:1.0499999999999998d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.020354872569441795d,8.017524960450828E-4d,-0.02206386998295784d],OnGround:0b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.1876d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:squid"},Name:"Squid",Scale:0.6944444f,UUID:[I;488746606,1876312093,-1582293357,2139790907]}},display:{Name:\'{"text":"Kraken of the depths!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.25d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:16.0d,Modifiers:[{Amount:-0.028267175516417276d,Name:"Random spawn bonus",Operation:1,UUID:[I;904579365,1095388434,-2079221910,56613228]}],Name:"minecraft:generic.follow_range"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:8.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.06663110395805134d,-0.0784000015258789d,0.0011508201133065817d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],"forge:spawn_type":"SPAWN_EGG",id:"minecraft:silvertropical_fish"},Name:"Silvertropical_fish",Scale:0.9615385f,UUID:[I;913707991,1000820097,-1560499399,-304684093]}},display:{Name:\'{"text":"Silver stone-dweller of DOOM!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
    "ptdye:trading_transceiver",
  ],
  requestedItems: [
    "64x minecraft:stick",
    "64x minecraft:stick",
    "64x minecraft:stick",
  ],
  title: "Interested in exotic creatures?",
  orderedAmount: 1,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, fellow trade mesh body! We here at gbd supply THE BEST of BEASTS. We heard you are an amazing supplier and we currently need some incentive devices to help our employees work harder, nothing special mind you, and of course in return you will get to see some our most EXCLUSIVE AMAZING BEASTS! What do you say?",
});
const gdbLead = getAgreement("gdbLead", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "Leftovers from nether exhibition",
  orderedAmount: 2,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, we are excited to offer you an incredible opportunity! We have a few leftover beasts from our nether exhibition, the highest quality stock around! We need a few leads for our future endeavors, lets strike a deal!",
});
const gdbLeadFriend = getAgreement("gdbLeadFriend", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "EXCLUSIVE Leftovers from nether exhibition",
  orderedAmount: 6,
  company: "galactic_beast_deliveries",
  message:
    "As our most VALUABLE customer, we are excited to offer you a once in a lifetime opportunity! We have a few leftover beasts from our nether exhibition, and we are willing to part with them for a small fee. What do you say?",
});

const sssHelmets = getAgreement("sssHelmets", {
  paymentItems: ["air"],
  requestedItems: ["16x botania:manasteel_helmet"],
  title: "The syndicate needs YOU!",
  orderedAmount: 2,
  company: "stellar_sigil_syndicate",
  message:
    "We are the syndicate, we know you have heard of us, we are here to make the world a better place, and we want you to be a part of that! We need some helmets for our new recruits, if you help us out with this, you can enjoy the feeling of being a part of something bigger than yourself!",
});
const sssBows = getAgreement("sssBows", {
  paymentItems: ["air"],
  requestedItems: [
    "16x minecraft:bow",
    "16x minecraft:bow",
    "16x minecraft:bow",
    "16x minecraft:bow",
    "16x minecraft:bow",
    "16x minecraft:bow",
  ],
  title: "The syndicate's fight for justice!",
  orderedAmount: 2,
  company: "stellar_sigil_syndicate",
  message:
    "Our fight for justice is forever persistently ongoing and your commitment to the cause did not go unnoticed. We need weaponry if we are to embark on our next endeavor, and I know you are the right cop for the task.",
});
const sssArrows = getAgreement("sssArrows", {
  paymentItems: ["air"],
  requestedItems: [
    "64x minecraft:arrow",
    "64x minecraft:arrow",
    "64x minecraft:arrow",
    "64x minecraft:arrow",
    "64x minecraft:arrow",
    "64x minecraft:arrow",
  ],
  title: "The syndicate's fight for justice requires ammunition!",
  orderedAmount: 8,
  company: "stellar_sigil_syndicate",
  message:
    "It is crucial for our brave warriors to not only be equipped with the finest weaponry, but also with the ammunition to use those with. We need arrows, and I trust that your donations to the cause will not stop with the bows you have already provided. We have already achieved great things thanks to your help",
});
const sssArmor = getAgreement("sssArmor", {
  paymentItems: [
    "64x emerald",
    "64x wheat",
    "64x minecraft:oak_planks",
    "32x supplementaries:ash",
  ],
  requestedItems: [
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_chestplate",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_chestplate",
  ],
  title: "The fight for justice continues, and more protection is needed!",
  orderedAmount: 2,
  company: "stellar_sigil_syndicate",
  message:
    "Our warriors have braved the enemy once more, and the casualties were high, if we are to embark on more attacks it will be beneficial to have more protection, we need some armor, and we need it fast!",
});
const sssAssaultContinues = getAgreement("sssAssaultContinues", {
  paymentItems: [
    "8x emerald",
    "32x wheat",
    "32x minecraft:oak_planks",
    "16x supplementaries:ash",
    Item.of("easy_villagers:villager").withName("Prisoner of war").withCount(4),
  ],
  requestedItems: [
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
  ],
  title: "The assault continues!",
  orderedAmount: 2,
  company: "stellar_sigil_syndicate",
  message:
    "We are continuing our assault, we are making great progress, but we are taking heavy losses, we need more armor. You help has been very valuable, all the amazing progress we've done would not have happened without you, the syndicate is forever in your metaphorical debt",
});
const sssFinalAssault = getAgreement("sssFinalAssault", {
  paymentItems: [
    "8x emerald",
    "32x wheat",
    "64x red_dye",
    "32x minecraft:oak_planks",
    "32x supplementaries:ash",
    Item.of("easy_villagers:villager").withName("Prisoner of war").withCount(2),
  ],
  requestedItems: [
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
    "16x botania:manasteel_helmet",
  ],
  title: "The final assault!",
  orderedAmount: 1,
  company: "stellar_sigil_syndicate",
  message:
    "We are at the end of the current push, your help was invaluable so far, the syndicate could not have done this without you. It is time to take the final step.",
});

const sssSlaveSale = getAgreement("sssSlaveSale", {
  paymentItems: [
    Item.of("easy_villagers:villager").withName("Slave"),
    "4x minecraft:deepslate_emerald_ore",
  ],
  requestedItems: ["16x botania:manasteel_helmet"],
  title: "The syndicate is expanding! With your help good friend!",
  orderedAmount: 0,
  company: "stellar_sigil_syndicate",
  message:
    "Thanks to you, we have defeated the horrendous enemy. We will continue to fight for justice around the system, and with you help our ranks will keep growing stronger!",
});

const vHelp = getAgreement("vHelp", {
  paymentItems: ["16x minecraft:emerald"],
  requestedItems: ["4x minecraft:iron_block", "minecraft:pumpkin"],
  title: "Help needed!",
  orderedAmount: 4,
  company: "villagers",
  message:
    "Help! We are under attack and are dying out, we need defenses, we don't know why they are attacking us but they are strong and they have helmets and weapons, we don't know what to do, please help us!",
});

const vHelp2 = getAgreement("vHelp2", {
  paymentItems: [
    "16x minecraft:emerald",
    "64x minecraft:wheat",
    "64x minecraft:carrot",
  ],
  requestedItems: ["16x minecraft:iron_block", "4x minecraft:pumpkin"],
  title: "We managed to fend them off! Need more help still",
  orderedAmount: 2,
  company: "villagers",
  message:
    "We managed to fend them off, but we are still in danger, we need more defences, we can actually pay more this time, we really appreciate your help",
});

const vHelp3 = getAgreement("vHelp3", {
  paymentItems: [
    "64x minecraft:wheat",
    "64x minecraft:bread",
    "16x minecraft:emerald",
    "16x minecraft:beetroot",
    "16x botania:manasteel_helmet",
    Item.of(
      "minecraft:player_head",
      '{SkullOwner:{Id:[I;449435050,1190088049,-1334360732,942410307],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGFlZTZiYjM3Y2JmYzkyYjBkODZkYjVhZGE0NzkwYzY0ZmY0NDY4ZDY4Yjg0OTQyZmRlMDQ0MDVlOGVmNTMzMyJ9fX0="}]}},display:{Name:\'{"text":"Pillager"}\'}}'
    ).withCount("16"),
  ],
  requestedItems: ["64x minecraft:iron_block", "16x minecraft:pumpkin"],
  title: "We are winning the war!",
  orderedAmount: 4,
  company: "villagers",
  message:
    "We are winning the war! Our golems are pushing them back one village at a time, we are hopful for the first time in a while. We got them cornonred now, we have this, we librated the planet!",
});

const vProactive = getAgreement("vProactive", {
  paymentItems: ["16x emerald", "16x minecraft:beetroot"],
  requestedItems: ["8x minecraft:iron_block", "2x minecraft:pumpkin"],
  title: "We will not be taken unprepared again",
  orderedAmount: 0,
  company: "villagers",
  message:
    "We will not be taken unprepared again, this time we are going to be prepared, we are going to be strong. We will ALWAYS be ready",
});

const vAttack = getAgreement("vAttack", {
  paymentItems: [
    "16x minecraft:emerald",
    "64x minecraft:wheat",
    "64x minecraft:carrot",
    Item.of(
      "minecraft:player_head",
      '{SkullOwner:{Id:[I;449435050,1190088049,-1334360732,942410307],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGFlZTZiYjM3Y2JmYzkyYjBkODZkYjVhZGE0NzkwYzY0ZmY0NDY4ZDY4Yjg0OTQyZmRlMDQ0MDVlOGVmNTMzMyJ9fX0="}]}}}'
    ).withCount(64),
  ],
  requestedItems: ["16x minecraft:iron_block", "4x minecraft:pumpkin"],
  title: "Time to take the fight to them!",
  orderedAmount: 10,
  company: "villagers",
  message:
    "We are going to take the fight to them, they will pay for what they have done, they are monsters and they will be slain! No mercy will be given!",
});

const vEmpire = getAgreement("vEmpire", {
  paymentItems: [
    "8x minecraft:emerald",
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pillager"},Name:"Slave"}},display:{Name:\'{"text":"Slave Gladiator","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["32x minecraft:chain"],
  title: "We are the new empire!",
  orderedAmount: 0,
  company: "villagers",
  message:
    "We are the new empire, we are the new rulers of this subsystem, thanks to you we are not only safe, but we also don't have to work the fields anymore. We are also running gladiator games with the extra slaves, this is great!",
});

const vHelpWhileHelpingOtherSide = getAgreement("vHelpWhileHelpingOtherSide", {
  paymentItems: ["8x minecraft:emerald"],
  requestedItems: ["16x minecraft:iron_block", "4x minecraft:pumpkin"],
  title: "They are getting stronger! We are barely holding on! Please help!",
  orderedAmount: 4,
  company: "villagers",
  message:
    "Thank you for your help, you saved us! We are managing to fend them off in many places, it is a tough battle but with your help we might be able to survive",
});

const sssHelmetsFixedRates = getAgreement("sssHelmetsFixedRates", {
  paymentItems: ["air"],
  requestedItems: ["32x botania:manasteel_helmet"],
  title: "Making the world a better place!",
  orderedAmount: 0,
  company: "stellar_sigil_syndicate",
  message:
    "Amazing! Its so great to have you with us brother, or sister, or whatever you are. We always require more recruits, and so we always require more helmets!",
});
const cccRawWhite = getAgreement("cccRawWhite", {
  paymentItems: [
    "8x minecraft:leather",
    "8x supplementaries:copper_lantern",
    "8x slime_ball",
    "8x create:cogwheel",
    "8x ptdye:mechanical_device",
    "4x createdieselgenerators:basin_lid",
  ],
  requestedItems: ["64x minecraft:raw_iron", "16x minecraft:raw_iron"],
  title: "Supplements required",
  orderedAmount: 3,
  company: "cosmic_cuisine_collective",
  message:
    "We have been receiving complaints from customers which we have not managed to deal with violently yet. Looking into a different approach. People are experiencing extreme deficiency in white minerals on our CCC Diet Plus program. We want to acquire some additives that can solve this.",
});
const cccIronBars = getAgreement("cccIronBars", {
  paymentItems: [
    "16x minecraft:leather",
    Item.of("botania:mana_tablet", "{mana:10000}"),
  ],
  requestedItems: ["64x minecraft:iron_bars", "64x minecraft:iron_bars"],
  title: "Building cells, supplies needed URGENTLY",
  orderedAmount: 4,
  company: "cosmic_cuisine_collective",
  message:
    "We are currently dealing with multiple class action lawsuits about poisonings. We have apprehended a few of those scoundrels and are currently in need of new holding cells, fast",
});
const bfsiZombies = getAgreement("bfsiZombies", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["64x paper", "32x paper"],
  title: "Contracts shortage",
  orderedAmount: 2,
  company: "Big Flicks And Solutions Inc",
  message:
    "We are shooting a few films at the moment and are not keeping up with the rate of contract signings, we need paper, a lot of it. In return we can offer some of our failed zombie movie props, they are not very good, but they are cheap and im sure they can find a better home with you",
});

const bfsiZombiesFixedRates = getAgreement("bfsiZombiesFixedRates", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}},display:{Name:\'{"text":"Failed Zombie Movie Prop","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["64x paper"],
  title: "More paper needed",
  orderedAmount: 0,
  company: "Big Flicks And Solutions Inc",
  message:
    "This worked really well for us! We have managed to sign some record breaking amounts of props, eh, I mean actors this season. Lets keep this going, we need more paper, we can offer more props, we have a lot of them, a lot",
});
addMixing(
  "stick",
  Item.of(
    "supplementaries:cage",
    '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken",Scale:0.87719303f}}}'
  ).weakNBT()
);
const bfsiChickenInvaders = getAgreement("bfsiChickenInvadors", {
  paymentItems: [
    "32x minecraft:gold_ingot",
    "16x botania:manasteel_ingot",
    "10x create:cogwheel",
    "10x minecraft:soul_sand",
  ],
  requestedItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
    ),
  ],
  title: "New movie adaptation needs cast",
  orderedAmount: 3,
  company: "Big Flicks And Solutions Inc",
  message:
    "We are adapting a new movie from a popular game, we need some actors, we are willing to pay a bit more for this one, we are in a hurry. This should be a one time thing though, we are sure the actors will last long and have a bright future ahead of them",
});

const bfsiChickenInvadersFixedRates = getAgreement(
  "bfsiChickenInvadorsFixedRates",
  {
    paymentItems: ["64x minecraft:yellow_dye"],
    requestedItems: [
      Item.of(
        "supplementaries:cage",
        '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
      ),
      Item.of(
        "supplementaries:cage",
        '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
      ),
      Item.of(
        "supplementaries:cage",
        '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
      ),
      Item.of(
        "supplementaries:cage",
        '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
      ),
      Item.of(
        "supplementaries:cage",
        '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
      ),
      Item.of(
        "supplementaries:cage",
        '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:chicken"},Name:"Chicken"}}}'
      ),
    ],
    title: "Fixed rates for actors",
    orderedAmount: 0,
    company: "Big Flicks And Solutions Inc",
    message:
      "Well some unexpected things happend with the actors you sent, we will need a supply of more actors of the same stock for the forseeable future, just keep sending for now",
  }
);

const bfsiKillWill = getAgreement("bfsiKillWill", {
  paymentItems: [
    "16x minecraft:gold_ingot",
    "4x minecraft:diamond_pickaxe",
    "minecraft:painting",
  ],
  requestedItems: [
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
  ],
  title: "Kill Will needs some special effects",
  orderedAmount: 4,
  company: "Big Flicks And Solutions Inc",
  message:
    "We are shooting a new movie, Kill Will, we need some special effects, you have proven yourself so far so lets see what else you can manufacture for us, this relationship can go far",
});

const bfsiKillWillAct2 = getAgreement("bfsiKillWillAct2", {
  paymentItems: [
    "16x minecraft:gold_ingot",
    "4x minecraft:diamond_pickaxe",
    "minecraft:painting",
  ],
  requestedItems: [
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
    "64x minecraft:red_dye",
  ],
  title: "Kill Will is a success, act 2 is coming",
  orderedAmount: 3,
  company: "Big Flicks And Solutions Inc",
  message:
    "The first act of Kill Will was a success, we are shooting the second act now, we need some more special effects, you are our go to supplier now for such things, we have a lot of movies in the pipeline, we will need a lot of special effects",
});

const bfsiFeedTheCrew = getAgreement("bfsiFeedTheCrew", {
  paymentItems: [
    "16x minecraft:gold_ingot",
    "16x create:andesite_alloy",
    "4x create_enchantment_industry:printer",
  ],
  requestedItems: ["64x minecraft:bread", "64x minecraft:bread"],
  title: "Feed the crew",
  orderedAmount: 4,
  company: "Big Flicks And Solutions Inc",
  message:
    "Our catering supplier is a little expensive, if you can supply some cheaper solutions maybe we can start in some new direction together",
});

const bfsiAdaptingTaste = getAgreement("adaptingTaste", {
  paymentItems: [
    "16x minecraft:gold_ingot",
    "16x create:andesite_alloy",
    "4x create:stressometer",
  ],
  requestedItems: ["64x create:sweet_roll"],
  title: "The crew is stress eating",
  orderedAmount: 4,
  company: "Big Flicks And Solutions Inc",
  message:
    "Our crew is stressed out, we need some sugar to calm them down. The situation here is a mess to be honest, we took on too many shoots at once, we will get this under control and everyone will get a good nights rest, probably",
});

const bfsiAdaptingTaste2 = getAgreement("bfsiAdaptingTaste2", {
  paymentItems: [
    "8x minecraft:shulker_box",
    "8x minecraft:gold_ingot",
    "8x create:stressometer",
  ],
  requestedItems: ["64x minecraft:cake"],
  title: "The crew is addicted",
  orderedAmount: 4,
  company: "Big Flicks And Solutions Inc",
  message:
    "Our crew is addicted to sugar, we need some more sugar, just make us a cake shipment, fast",
});
const bfsiAdaptingTasteFixed = getAgreement("bfsiAdaptingTasteFixed", {
  paymentItems: ["4x minecraft:shulker_box", "2x create:stressometer"],
  requestedItems: ["64x minecraft:cake"],
  title: "Just keep the cake tap open please",
  orderedAmount: 0,
  company: "Big Flicks And Solutions Inc",
  message:
    "Yea its us again, I know, I know, look, we got this under control, just need a few more and then i'll ween them off",
});
const bfsiWastelandClearance = getAgreement("bfsiWastelandClearance", {
  paymentItems: [
    "32x minecraft:oak_log",
    "10x minecraft:grass_block",
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:bee"},Name:"Bee"}}}'
    ),
    "minecraft:bee_nest",
    "minecraft:bee_nest",
  ],
  requestedItems: ["16x #forge:tools/axes", "16x #forge:tools/shovels"],
  title: "Creating the wasteland set for our next movie",
  orderedAmount: 7,
  company: "Big Flicks And Solutions Inc",
  message:
    "We are shooting a new movie, we need to create a wasteland set, it will take a while but with the help of tools from you and some hard work from our lawyers, we can get it done in no time",
});

const bfsiShowerUpgrades = getAgreement("bfsiShowerUpgrades", {
  paymentItems: ["64x create:experience_nugget", "64x create:andesite_alloy"],
  requestedItems: ["16x create:spout"],
  title: "Shower upgrades",
  orderedAmount: 2,
  company: "Big Flicks And Solutions Inc",
  message:
    "In all my years of experience, I have never smelled anything like this, we need to upgrade our showers as quickly as possible or we will have a mutiny on our hands",
});

const bfsiSoap = getAgreement("bfsiSoap", {
  paymentItems: ["32x create:experience_nugget", "8x create:andesite_alloy"],
  requestedItems: ["64x supplementaries:soap", "32x supplementaries:soap"],
  title: "Soap needed",
  orderedAmount: 3,
  company: "Big Flicks And Solutions Inc",
  message:
    "We are upgrading our showers, we are in a critical state here and we need a new shipment of soap, fast",
});

const bfsiSoapFixed = getAgreement("bfsiSoapFixed", {
  paymentItems: ["32x create:experience_nugget"],
  requestedItems: [
    "64x supplementaries:soap",
    "64x supplementaries:soap",
    "32x supplementaries:soap",
  ],
  title: "Soap fixed rates",
  orderedAmount: 0,
  company: "Big Flicks And Solutions Inc",
  message:
    "This has been working out great for us, lets fix our rates, we can offer you some experience nuggets for your soap",
});

const bfsiPigs = getAgreement("bfsiPigs", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pig"},Name:"Pig"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pig"},Name:"Pig"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pig"},Name:"Pig"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pig"},Name:"Pig"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pig"},Name:"Pig"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:pig"},Name:"Pig"}}}'
    ),
  ],
  requestedItems: ["64x supplementaries:soap"],
  title: "Want to take those pigs off our hands?",
  orderedAmount: 2,
  company: "Big Flicks And Solutions Inc",
  message:
    "We have a few pigs left over, dont ask why. If they are of value to you please lets make a trade and get them off our hands",
});

const drgDrinks = getAgreement("drgDrinks", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    "8x minecraft:deepslate_gold_ore",
  ],
  requestedItems: [
    Item.of("minecraft:potion", '{Potion:"minecraft:poison"}').withCount(8),
  ],
  title: "Drinks required to sate dwarves",
  orderedAmount: 1,
  company: "DRG",
  message:
    "HQ is asking for some drinks and RND has not managed to keep up with the dwarves latley, could be related to the increased death toll, probably not. We need extra supply of some strong drinks",
});
const drgSpecialDrinks = getAgreement("drgSpecialDrinks", {
  paymentItems: ["32x minecraft:barrel", "16x minecraft:warped_hyphae"],
  requestedItems: [
    Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}').withCount(16),
    Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}').withCount(16),
  ],
  title: "Special drinks for the dwarves",
  orderedAmount: 2,
  company: "DRG",
  message:
    "Mission Control has mentioned that dwarf productivty has gone down 5.6 percent and RND things it is because of lack of drink variety",
});
const drgSpecialDrinksFixed = getAgreement("drgSpecialDrinksFixed", {
  paymentItems: ["20x minecraft:warped_hyphae"],
  requestedItems: [
    Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}').withCount(16),
    Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}').withCount(16),
    Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}').withCount(8),
  ],
  title: "Special drinks for the dwarves",
  orderedAmount: 2,
  company: "DRG",
  message:
    "We have found some odd fungus on the dwarves mining operations, we will sell them to you for more of those nice drinks",
});
const drgDrinksFixed = getAgreement("drgDrinksFixed", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
  ],
  requestedItems: [
    Item.of("minecraft:potion", '{Potion:"minecraft:poison"}').withCount(16),
  ],
  title: "Drinks fixed rates!",
  orderedAmount: 0,
  company: "DRG",
  message:
    "HQ is happy with your drinks, seems that the dwarves are pleased too. Those who did not pass out that is",
});
const drgPickaxes = getAgreement("drgPickaxes", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:spider"},Name:"Glyphid"}}}'
    ),
    "8x minecraft:deepslate_gold_ore",
    "8x minecraft:copper_ore",
    "8x minecraft:iron_ore",
  ],
  requestedItems: ["16x #forge:tools/pickaxes", "16x #forge:tools/pickaxes"],
  title: "New tools supply",
  orderedAmount: 2,
  company: "DRG",
  message:
    "We need some new tools, retrial of tools from fallen dwarf has proven none beneficial to the company, we will pay for new tools with some high quality ores",
});

const drgGoodPickaxes = getAgreement("drgGoodPickaxes", {
  paymentItems: [
    "8x minecraft:ancient_debris",
    "8x minecraft:deepslate_gold_ore",
    "8x minecraft:copper_ore",
    "8x minecraft:iron_ore",
  ],
  requestedItems: [
    "16x diamond_pickaxe",
    "16x diamond_pickaxe",
    "16x diamond_pickaxe",
  ],
  title: "Better tools supply",
  orderedAmount: 2,
  company: "DRG",
  message:
    "RND have found that our current tools are breaking at a high enough rate to not justify for us to replace them through our factories, lets make a deal for some high quality pickaxes",
});

const drgEvenBetterPickaxesFixed = getAgreement("drgEvenBetterPickaxesFixed", {
  paymentItems: [
    "4x minecraft:ancient_debris",
    "8x minecraft:deepslate_gold_ore",
    "10x minecraft:copper_ore",
  ],
  requestedItems: [
    Item.of("minecraft:diamond_pickaxe", 16, "{Damage:0}")
      .enchant("minecraft:fortune", 1)
      .withCount(16),
    Item.of("minecraft:diamond_pickaxe", 16, "{Damage:0}")
      .enchant("minecraft:fortune", 1)
      .withCount(16),
    Item.of("minecraft:diamond_pickaxe", 16, "{Damage:0}")
      .enchant("minecraft:fortune", 1)
      .withCount(16),
  ],
  title: "Shiny tools fixed contract",
  orderedAmount: 0,
  company: "DRG",
  message:
    "The dwarves love the new tools but it seems some of them want to spend their extra gold on shiny ones, lets get a fixed line for those alright?",
});
const drgEvenBetterPickaxesFixed2 = getAgreement("drgEvenBetterPickaxesFixed", {
  paymentItems: [
    "4x minecraft:ancient_debris",
    "10x minecraft:deepslate_gold_ore",
    "8x minecraft:copper_ore",
  ],
  requestedItems: [
    Item.of("minecraft:diamond_pickaxe", 16, "{Damage:0}")
      .enchant("minecraft:efficiency", 1)
      .withCount(16),
    Item.of("minecraft:diamond_pickaxe", 16, "{Damage:0}")
      .enchant("minecraft:efficiency", 1)
      .withCount(16),
    Item.of("minecraft:diamond_pickaxe", 16, "{Damage:0}")
      .enchant("minecraft:efficiency", 1)
      .withCount(16),
  ],
  title: "Shiny tools fixed contract",
  orderedAmount: 0,
  company: "DRG",
  message:
    "The dwarves love the new tools but it seems some of them want to spend their extra gold on shiny ones, lets get a fixed line for those alright?",
});

const jsfWelcome = getAgreement("jsfWelcome", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    "16x tropical_fish",
    "16x kelp",
    Item.of(
      "minecraft:barrel",
      4,
      '{BlockEntityTag:{LootTable:"ptd:jaspers_fishing"}}'
    ),
  ],
  requestedItems: ["16x bucket", "16x bucket", "16x bucket"],
  title: "Welcome to Jaspers Seafood Emporium",
  orderedAmount: 1,
  company: "Jaspers Seafood Emporium",
  message:
    "We at Jaspers Seafood Emporium provide the BEST seafood with the LOWEST plastic content in the GALAXY (tm). We contacted you because we've heard you might be able to fit our needs",
});

const jsfFishingRods = getAgreement("jsfFishingRods", {
  paymentItems: [
    Item.of(
      "minecraft:barrel",
      4,
      '{BlockEntityTag:{LootTable:"ptd:jaspers_fishing"}}'
    ),
  ],
  requestedItems: [
    "16x #forge:tools/fishing_rods",
    "16x #forge:tools/fishing_rods",
  ],
  title: "Fishing rods needed",
  orderedAmount: 2,
  company: "Jaspers Seafood Emporium",
  message:
    "Fishing rods are in order, we will cut you in or some of our new caches of course",
});

const jsfBoats = getAgreement("jsfBoats", {
  paymentItems: [
    Item.of(
      "minecraft:barrel",
      4,
      '{BlockEntityTag:{LootTable:"ptd:jaspers_fishing"}}'
    ),
  ],
  requestedItems: ["16x #minecraft:boats", "16x #minecraft:boats"],
  title: "Boats needed",
  orderedAmount: 2,
  company: "Jaspers Seafood Emporium",
  message:
    "We need some boats, high quality wood please, none of that rotting crap. And please, bundle them WITH the oars",
});

const jsfSquids = getAgreement("jsfSquids", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "minecraft:barrel",
      2,
      '{BlockEntityTag:{LootTable:"ptd:jaspers_fishing"}}'
    ),
  ],
  requestedItems: ["16x bucket", "16x bucket"],
  title: "Buckets needed",
  orderedAmount: 3,
  company: "Jaspers Seafood Emporium",
  message:
    "We need some buckets, we are running low on them, we will pay you in some of our special squid, only our squids are this black, and plastic content is guaranteed to be lower than the average sampled squid from the market",
});

const jsfFishingFixed = getAgreement("jsfFishingFixed", {
  paymentItems: [
    Item.of(
      "minecraft:barrel",
      4,
      '{BlockEntityTag:{LootTable:"ptd:jaspers_fishing"}}'
    ),
  ],
  requestedItems: ["16x #forge:tools/fishing_rods", "8x #minecraft:boats"],
  title: "Fishing rods and boats for some fish fixed rates",
  orderedAmount: 0,
  company: "Jaspers Seafood Emporium",
  message:
    "We are very happy with the fishing rods and boats, lets make a fixed rate contract for them",
});

const jsfEnchantedFishingRods = getAgreement("jsfEnchantedFishingRods", {
  paymentItems: [
    Item.of(
      "minecraft:barrel",
      2,
      '{BlockEntityTag:{LootTable:"ptd:jaspers_fishing_library"}}'
    ),
  ],
  requestedItems: [Item.of("fishing_rod").enchant("luck_of_the_sea", 2)],
  title: "Enchanted fishing rods",
  orderedAmount: 20,
  company: "Jaspers Seafood Emporium",
  message:
    "We are sending an expedition to the deeper sea above the ancient library, we will need better fishing rods if we are to do this, are you in?",
});

const jsfSquidsFixed = getAgreement("jsfSquidsFixed", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:squid"},Name:"Squid"}}}'
    ),
  ],
  requestedItems: [
    "16x minecraft:bucket",
    "16x minecraft:bucket",
    "16x minecraft:bucket",
  ],
  title: "Squids fixed rates",
  orderedAmount: 0,
  company: "Jaspers Seafood Emporium",
  message:
    "We are very happy with the bucket supply, lets make a fixed rate contract for them",
});

const dddExploringAncientRuins = getAgreement("dddExploringAncientRuins", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      3,
      '{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon"}}'
    ).withName("Dungeon loot"),
  ],
  requestedItems: [
    "64x minecraft:torch",
    "64x minecraft:torch",
    "64x minecraft:torch",
    "64x minecraft:torch",
    "64x minecraft:torch",
  ],
  title: "Exploring ancient ruins",
  orderedAmount: 3,
  company: "Dungeon Delving Dave",
  message:
    "My name is Dave, me and my party of adventurers are on the hunt for glory and riches, we are currently exploring some ancient ruins and we need some torches, we will pay you in some of the loot we find",
});

const dddNether = getAgreement("dddNether", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      3,
      '{BlockEntityTag:{LootTable:"minecraft:chests/nether_bridge"}}'
    ).withName("Nether Planet Loot"),
  ],
  requestedItems: [
    "64x cobblestone",
    "64x cobblestone",
    "64x cobblestone",
    "64x cobblestone",
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:fire_protection", 2)
      .withCount(8),
  ],
  title: "Nether Planet Expedition",
  orderedAmount: 10,
  company: "Dungeon Delving Dave",
  message:
    "Hello again! We are sending a brave expedition to the Nether Planet, the none settled areas of the planet are said to have old stongholds that hold a potential for great riches, also, perhaps if we clear a path, we can sell some of the native creatures there, I personally heard of blazing monsters living in that area",
});

const dddNetherBlazeFixed = getAgreement("dddNetherBlazeFixed", {
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:blaze"},Name:"Blaze"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:blaze"},Name:"Blaze"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:blaze"},Name:"Blaze"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:blaze"},Name:"Blaze"}}}'
    ),
  ],
  requestedItems: [
    Item.of("minecraft:enchanted_book")
      .enchant("minecraft:fire_protection", 2)
      .withCount(4),
  ],
  title: "Nether Planet Blaze Exploitation",
  orderedAmount: 0,
  company: "Dungeon Delving Dave",
  message:
    "We have secured the sector, thanks partly to your help! We already started exporting the local fauna, if you'd like to acquire some just say the word, we set up an automated trading outpost there",
});
const dddDungeon = getAgreement("dddDungeon", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      3,
      '{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon"}}'
    ).withName("Dungeon loot"),
  ],
  requestedItems: ["64x arrow", "64x arrow", "64x arrow"],
  title: "Dungeon Delving",
  orderedAmount: 3,
  company: "Dungeon Delving Dave",
  message:
    "We are going into a dungeon to find loot and to perhaps save the princess, some say she was last seen around this area and there is a nice reward for finding her. Anyhow, we need need ammunition to deal with the evil necromancers minions",
});

const dddDungeon2 = getAgreement("dddDungeon2", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      4,
      '{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon"}}'
    ).withName("Dungeon loot"),
  ],
  requestedItems: [
    "15x #forge:tools/swords",
    "15x #forge:armors/helmets",
    "64x arrow",
    "64x arrow",
  ],
  title: "Deeper into the dungeon",
  orderedAmount: 1,
  company: "Dungeon Delving Dave",
  message:
    "We are going deeper into the dungeon, our equipment is failing us slowly, swords break, armor bent, this is risky business, we need some new equipment, soon. We think we know where the necromancer is",
});

const dddDungeonFixed = getAgreement("dddDungeonFixed", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      '{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon"}}'
    ).withName("Dungeon loot"),
  ],
  requestedItems: ["64x arrow", "64x torch"],
  title: "Lets keep this going",
  orderedAmount: 0,
  company: "Dungeon Delving Dave",
  message:
    "It appears you are a reliable source. Lets keep a steady line going.",
});

const dddNecromancer = getAgreement("dddNecromancer", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      2,
      '{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon"}}'
    ).withName("Dungeon loot"),
    Item.of(
      "minecraft:chest",
      2,
      '{BlockEntityTag:{LootTable:"minecraft:chests/ancient_city"}}'
    ).withName("Boss loot"),
  ],
  requestedItems: [
    "64x arrow",
    "64x arrow",
    "64x arrow",
    Item.of("netherite_sword").withCount(15),
  ],
  title: "Found the Necromancer!",
  orderedAmount: 4,
  company: "Dungeon Delving Dave",
  message:
    "We found the necromancer! It is time to fight! After me! For glory and riches! And the princess!",
});

const dddNecromancerIsPrincess = getAgreement("dddNecromancerIsPrincess", {
  paymentItems: [
    Item.of(
      "minecraft:chest",
      5,
      '{BlockEntityTag:{LootTable:"minecraft:chests/simple_dungeon"}}'
    ).withName("Dungeon loot"),
    "64x minecraft:gold_ingot",
    "64x minecraft:gold_ingot",
    "64x minecraft:gold_ingot",
  ],
  requestedItems: [
    "64x arrow",
    "64x arrow",
    "64x arrow",
    "lead",
    "supplementaries:cage",
    dddNecromancer.item,
  ],
  title: "The Necromancer is the princess!? ",
  orderedAmount: 1,
  company: "Dungeon Delving Dave",
  message:
    "You are saying that the princess was the necromancer all along?! This is outrageous! We will need to take her back to the castle, I really dont know what the king will say about this. We need some things that help help us with this, a lead and a cage. You will get part of the bounty, don't worry. Thank you for alerting us",
});

const pAgainstAdventurers = getAgreement("pAgainstAdventurers", {
  paymentItems: [
    "32x deepslate_gold_ore",
    "32x deepslate_diamond_ore",
    Item.of(
      "createdieselgenerators:canister",
      '{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:8000,FluidName:"create:honey"}}]}}'
    ),
    dddDungeon2.item,
  ],
  requestedItems: [dddDungeon2.item, "32x create:mechanical_saw"],
  title: "Need materials for traps",
  orderedAmount: 1,
  company: "Princess Avarusa",
  message:
    "Hello, my name is Princess Avarusa, I managed to track this place down with blood and tears and I thought my army of undead would be enough to protect it. If you help me instead of the adventurers, I will the rare minerals found here, including from the Honey deposit",
});

const pAdventurersFoundMe = getAgreement("pAdventurersFoundMe", {
  paymentItems: [
    Item.of(
      "createdieselgenerators:canister",
      '{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:8000,FluidName:"create:honey"}}]}}'
    ),
    Item.of(
      "createdieselgenerators:canister",
      '{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:8000,FluidName:"create:honey"}}]}}'
    ),
    Item.of(
      "createdieselgenerators:canister",
      '{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:8000,FluidName:"create:honey"}}]}}'
    ),
    Item.of(
      "createdieselgenerators:canister",
      '{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:8000,FluidName:"create:honey"}}]}}'
    ),
  ],
  requestedItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
  ],
  title: "The Adventurers are here, it is time to dance",
  orderedAmount: 2,
  company: "Princess Avarusa",
  message:
    "They found me, I will need some more undead to deal with them, It will be worthwhile for you to help me, we can both benefit from this Honey deposit, just send me the reinforcements I need first. Make sure they are not named or anything, I need them clean",
});

const pHoneyFixed = getAgreement("pHoneyFixed", {
  paymentItems: [
    Item.of(
      "createdieselgenerators:canister",
      '{BlockEntityTag:{Tanks:[{Level:{Speed:0.25f,Target:1.0f,Value:1.0f},TankContent:{Amount:8000,FluidName:"create:honey"}}]}}'
    ),
  ],
  requestedItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{id:"minecraft:zombie"},Name:"Zombie"}}}'
    ),
  ],
  title: "Honey deposit, fixed rates",
  orderedAmount: 0,
  company: "Princess Avarusa",
  message:
    "Finally, we can excavate in peace! This was exhausting. Well, anyhow, a deal is a deal. I will pay you in honey in return for more undead to boost my ranks, it is a rare deposit, I hope you can make good use of it",
});

global.starterDeals = [mlcSand];
// global.starterDeals = [cccRawWhite, mlcSand, bhbCheese];
tradeBranch([cccRawWhite, bhbCheese, bfsiZombies], [mlcSand]);
tradeBranch(
  [bfsiZombiesFixedRates, bfsiChickenInvaders, bfsiFeedTheCrew],
  [bfsiZombies]
);
tradeBranch(
  [bfsiAdaptingTaste, bfsiSoap, bfsiShowerUpgrades],
  [bfsiFeedTheCrew]
);
tradeBranch([bfsiSoapFixed, bfsiPigs], [bfsiShowerUpgrades, bfsiSoap]);
tradeBranch(bfsiAdaptingTaste2, bfsiAdaptingTaste);
tradeBranch(bfsiAdaptingTasteFixed, bfsiAdaptingTaste2);
tradeBranch([bfsiKillWill, bfsiWastelandClearance], [bfsiChickenInvaders]);
tradeBranch(bfsiKillWillAct2, bfsiKillWill);
tradeBranch(bfsiChickenInvadersFixedRates, [
  bfsiKillWillAct2,
  bfsiWastelandClearance,
]);
tradeBranch([bcfPlates2, bnwRedstone], [bcfPlates]);
tradeBranch([cccIronBars, bcfPlates, drgDrinks], [cccRawWhite]);
tradeBranch(bnwManasteel, bnwRedstone);
tradeBranch([bnwQuartz, bnwManasteelFixedRates], bnwManasteel);
tradeBranch(
  [bnwCogs, bnwQuartz, bnwManasteelFixedRates2],
  [bnwManasteel, bfcPickaxes]
);
tradeBranch(
  [bfcPlatesPermanent, bfcPickaxes, bfcHelmets, mlcSand2], //The next trades in line
  [bcfPlates2] //The trades that need to be completed and process for that
);
tradeBranch([mlcEndstoneFixed, mlcSandFixed], mlcSand2);
tradeBranch([bhbWheat, wscAxes, bhbCheeseFixed], bhbCheese);
tradeBranch([wscBread, jsfWelcome], wscAxes);
tradeBranch([jsfBoats, jsfSquids], jsfWelcome);
tradeBranch([jsfSquidsFixed], jsfSquids);
tradeBranch([jsfFishingRods, jsfEnchantedFishingRods], jsfBoats);
tradeBranch([jsfFishingFixed], jsfFishingRods);
tradeBranch([wscBreadAndAxesFixed], wscBread);
tradeBranch([bhbFurnaces, sssHelmets, dddExploringAncientRuins], bhbWheat);
tradeBranch([dddDungeon, dddNether], dddExploringAncientRuins);
tradeBranch([dddNetherBlazeFixed], dddNether);
tradeBranch([dddDungeon2, pAgainstAdventurers], dddDungeon);
tradeBranch([pAdventurersFoundMe], pAgainstAdventurers);
tradeBranch([pHoneyFixed], pAdventurersFoundMe);
tradeBranch([dddNecromancer], dddDungeon2);
tradeBranch(dddNecromancerIsPrincess, [
  dddDungeon2,
  {
    completedItem: Item.of(
      "minecraft:paper",
      '{RepairCost:0,display:{Name:\'{"text":"The princess is the necromancer!"}\'}}'
    ),
  },
]);
tradeBranch(dddDungeonFixed, dddNecromancerIsPrincess);
tradeBranch(dddDungeonFixed, dddNecromancer);
tradeBranch([sssHelmetsFixedRates, sssBows], sssHelmets);
tradeBranch([sssArrows], sssBows);
tradeBranch([sssArmor, vHelp], sssArrows);
tradeBranch([sssFinalAssault], sssArmor);
tradeBranch([vHelp2], [vHelp, { completedItem: sssArmor.item }]);
tradeBranch(vHelp3, vHelp2);
tradeBranch(
  [vHelpWhileHelpingOtherSide, sssAssaultContinues],
  [vHelp, sssArmor]
);
tradeBranch(
  [vHelpWhileHelpingOtherSide, sssAssaultContinues],
  [sssAssaultContinues, vHelpWhileHelpingOtherSide]
);
tradeBranch(
  [sssFinalAssault],
  [sssAssaultContinues, { completedItem: vHelpWhileHelpingOtherSide.item }]
);
tradeBranch(
  [vHelp3],
  [vHelpWhileHelpingOtherSide, { completedItem: sssAssaultContinues.item }]
);
tradeBranch([vProactive], vHelp3);
tradeBranch(
  [vProactive, vAttack],
  [vHelp3, { completedItem: sssHelmetsFixedRates.item }]
);
tradeBranch([vEmpire], [vAttack]);

tradeBranch(sssSlaveSale, sssFinalAssault);

tradeBranch([bhbWheatFixedRates, qubeAngry, gbdSticks], bhbFurnaces);
tradeBranch([qubeSturdyDevice], qubeAngry);
tradeBranch([qubeGlass, qubeLogicDevice], qubeSturdyDevice);
tradeBranch([qubeLogicDevice2, qubeWheat], qubeLogicDevice);
tradeBranch([qubeWheatFixed], qubeWheat);
tradeBranch([qubeTrack], qubeLogicDevice2);
// tradeBranch([qubeLocomotiveDevice], qubeTrack);
tradeBranch([qubeTrackFixed], qubeLocomotiveDevice);
tradeBranch(
  [qubeBetterGlass, qubeLocomotiveDevice, qubeWeapons],
  [qubeGlass, qubeTrack]
);
tradeBranch([qubeWeaponsEnchanted], qubeWeapons);
tradeBranch(
  [qubeWeaponsEnchantedFixed, qubeWeaponsEnchantedLootingFixed],
  qubeWeaponsEnchanted
);
tradeBranch([qubeBetterGlassFixed], qubeBetterGlass);
tradeBranch([bnwPolishedRoseQuartz, gdbLeadFriend], [bnwQuartz, gbdSticks]);
tradeBranch([bnwPolishedRoseQuartz, gdbLeadFriend], [bnwCogs, gbdSticks]);
tradeBranch([bnwPolishedRoseQuartz, gdbLead], [bnwQuartz, bnwCogs]);
tradeBranch([drgPickaxes, drgDrinksFixed, drgSpecialDrinks], [drgDrinks]);
tradeBranch([drgSpecialDrinksFixed], drgSpecialDrinks);
tradeBranch([drgGoodPickaxes], [drgPickaxes]);
tradeBranch(
  [drgEvenBetterPickaxesFixed, drgEvenBetterPickaxesFixed2],
  [drgGoodPickaxes]
);

if (feature("Debug commands for trade related things")) {
  ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
      Commands.literal("starterDeals").executes((context) => {
        global.starterDeals.forEach((deal) =>
          context.getSource().getPlayer().give(deal.item)
        );
        return 0;
      })
    );
    event.register(
      Commands.literal("starterDealCompleted").executes((context) => {
        global.starterDeals.forEach((deal) =>
          context.getSource().getPlayer().give(deal.completedItem.copy())
        );
        return 0;
      })
    );
    event.register(
      Commands.literal("allAgreements").executes((context) => {
        global.allAgreements.forEach((deal) =>
          context.getSource().getPlayer().give(deal.copy())
        );
        return 0;
      })
    );
  });
}
