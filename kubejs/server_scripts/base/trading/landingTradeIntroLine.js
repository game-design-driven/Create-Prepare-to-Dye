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
  paymentItems: ["32x create:track"],
  requestedItems: ["16x #forge:tools/pickaxes"],
  title: "Tools needed",
  orderedAmount: 0,
  company: "bobs_construction_fleet",
  message:
    "Planing to do some work for some computer company on Zora, we need some tools",
});
const bfcHelmets = getAgreement({
  paymentItems: ["4x create:railway_casing"],
  requestedItems: ["16x minecraft:iron_helmet"],
  title: "Hardhats",
  orderedAmount: 0,
  company: "bobs_construction_fleet",
  message:
    "We also need some hardhats for our upcoming contract, less urgent though so take your time",
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
const bnbWheat = getAgreement({
  paymentItems: ["8x botania:livingwood_log", "water_bucket"],
  requestedItems: ["64x wheat"],
  title: "Clean wheat needed",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "Currently we are getting our wheat from Qube, we are not 100% where they are getting it but it always comes stained with blood, we have a line dedicated to cleaning just because of that. If you can supply clean wheat, I think we can be great friends",
});
const bnbFurnaces = getAgreement({
  paymentItems: ["8x clay", "8x copper_ingot", "8x botania:manasteel_ingot"],
  requestedItems: ["64x minecraft:furnace"],
  title: "Expanding our presence on Zora",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "We are expanding our presence on Zora, we need some furnaces, you have proven yourself so far, lets see if we can work some fixed rates for your wheat after this",
});
const bnbWheatFixedRates = getAgreement({
  paymentItems: ["32x clay"],
  requestedItems: ["64x wheat", "64x wheat"],
  title: "Clean wheat fixed rates",
  orderedAmount: 2,
  company: "black_hole_bagels_llc",
  message:
    "Alright, you are our new main source now, dont fail us, and dont worry about Qube, we wont tell them",
});
const bnwRedstone = getAgreement({
  paymentItems: [
    Item.of(
      "ae2:energy_cell",
      2,
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
const bnwRedstoneFixedRates = getAgreement({
  paymentItems: ["4x ae2:fluix_smart_cable"],
  requestedItems: ["64x minecraft:redstone", "64x minecraft:redstone"],
  title: "Fixed rates redstone > cables",
  orderedAmount: 0,
  company: "boards_and_wires",
  message:
    "Alright, you seem to be reliable, I believe it is time we made it official, lets start a fixed rates agreement. Your redstone is high quality, we make great cables, simple as that",
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
const bnwPolishedRoseQuartz = getAgreement({
  paymentItems: [
    '4x create:mechanical_arm',
    "4x ae2:storage_bus",
    "8x ae2:fluix_smart_cable",
  ],
  requestedItems: ["64x create:polished_rose_quartz"],
  title: "Assembly expansion",
  orderedAmount: 1,
  company: "boards_and_wires",
  message:
    "We are expanding our assembly line, we need some parts, we are willing to shell out a bit more for this one, we are in a hurry",
});
const qubeAngry = getAgreement({
  paymentItems: ["minecraft:air"],
  requestedItems: [bnbWheatFixedRates.item],
  title: "Who do you think you are?!",
  orderedAmount: 1,
  company: "qube",
  message:
    "You sun of a squid, thought we woudnt find out? Who do you think you are? Waltzing over to our system and changing things around, this is unacceptable. Know this, if you want ANY trade from REAL companies around here give up this contract NOW and you will be forgiven, we may talk then",
});

const gbdSticks = getAgreement({
  paymentItems: [
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:1.0499999999999998d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.020354872569441795d,8.017524960450828E-4d,-0.02206386998295784d],OnGround:0b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.1876d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:squid"},Name:"Squid",Scale:0.6944444f,UUID:[I;488746606,1876312093,-1582293357,2139790907]}},RepairCost:0,display:{Name:\'{"text":"Kraken of the depths!","italic":"false"}\'}}'
    ),
    Item.of(
      "supplementaries:cage",
      '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.25d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:16.0d,Modifiers:[{Amount:-0.028267175516417276d,Name:"Random spawn bonus",Operation:1,UUID:[I;904579365,1095388434,-2079221910,56613228]}],Name:"minecraft:generic.follow_range"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:8.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[-0.06663110395805134d,-0.0784000015258789d,0.0011508201133065817d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],"forge:spawn_type":"SPAWN_EGG",id:"minecraft:silverfish"},Name:"Silverfish",Scale:0.9615385f,UUID:[I;913707991,1000820097,-1560499399,-304684093]}},RepairCost:0,display:{Name:\'{"text":"Silver stone-dweller of DOOM!","italic":"false"}\'}}'
    ),
  ],
  requestedItems: ["64x minecraft:stick", "64x minecraft:stick"],
  title: "Are you interested in exotic creatures?",
  orderedAmount: 1,
  company: "galactic_beast_deliveries",
  message:
    "HELLO, fellow trade network body! We here at gbd supply THE BEST of BEASTS. We heard you are an amazing supplier and we currently need some incentive devices to help our employees work harder, nothing special mind you, and of course in return you will get to see some our most EXCLUSIVE AMAZING BEASTS! What do you say?",
});
const gdbLead = getAgreement({
  paymentItems: [
    Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!",\"italic\":\"false\"}\'}}')
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "Leftovers from nether exhibition",
  orderedAmount: 2,
  company: "galactic_beast_deliveries",
  message:
  "HELLO, we are excited to offer you an incredible opportunity! We have a few leftover beasts from our nether exhibition, the highest quality stock around! We need a few leads for our future endeavors, lets strike a deal!",
});
const gdbLeadFriend = getAgreement({
  paymentItems: [
    Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{AbsorptionAmount:0.0f,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.34500000000000003d,Name:"minecraft:generic.movement_speed"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:20.0f,HurtByTimestamp:0,HurtTime:0s,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],id:"more_babies:blaze"},Name:"Blaze",Scale:0.4320988f,UUID:[I;321571076,-271104547,-1140807037,761034053]}},RepairCost:0,display:{Name:\'{"text":"Blazing MONSTROSITY of nether planet!",\"italic\":\"false\"}\'}}')
  ],
  requestedItems: ["32x minecraft:lead"],
  title: "EXCLUSIVE Leftovers from nether exhibition",
  orderedAmount: 4,
  company: "galactic_beast_deliveries",
  message:
  "As our most VALUABLE customer, we are excited to offer you a once in a lifetime opportunity! We have a few leftover beasts from our nether exhibition, and we are willing to part with them for a small fee. What do you say?",
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
tradeBranch(bnbWheat, bhbCheese);
tradeBranch(bnbFurnaces, bnbWheat);
tradeBranch([bnbWheatFixedRates, qubeAngry, gbdSticks], bnbFurnaces);
tradeBranch([bnwPolishedRoseQuartz, gdbLeadFriend], [bnwQuartz, gbdSticks])
tradeBranch([bnwPolishedRoseQuartz, gdbLead], [bnwQuartz, bnwCogs])

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
