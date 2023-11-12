// Black Hole Bagels LLC
// 64x fermented blob -> Gourmaryllis 16x sugar canes, water bucket, 4x hoppers
const starterDeals = [
  getAgreement(
    ["32x andesite", "8x create:belt_connector", "8x create:cogwheel"],
    ["64x create:iron_sheet"],
    "We want plates",
    2,
    "Bobs Construction Fleet",
    "Hello, I see you are new here in the trading mesh, doesnt matter much, Im from BCF and we want to contract some white plates, willing to pay too"
  ),
  getAgreement(
    ['botania:manasteel_shovel', "2x botania:rannuncarpus", "2x botania:hopperhock", "2x botania:mana_pool", "botania:mana_spreader"],
    ["64x minecraft:sand", "64x minecraft:sand", "64x minecraft:sand", "64x minecraft:sand"],
    "Your Sand – Our Beaches?",
    2,
    "Magical Landscaping co",
    "Hey there, new kid. Heard youre the fresh grain on the block. We at Magical Landscaping Co. are in the biz of building billionaire beachfronts. So, heres the scoop: we need sand. Lots of it. Pristine, untouched, like your rep. Lets make a deal thatl put your sands on the lunar map. Whaddya say?"
  ),
  getAgreement(
    ["botania:gourmaryllis", 'water_bucket', "4x hopper", "16x sugar_cane"],
    ["32x kubejs:fermented_blob"],
    "Need some ingredients for our new recipe",
    2,
    "Black Hole Bagels LLC",
    "Hello, we are a new company that is trying to make a new recipe for bagels, we need some ingredients, willing to pay, simple as that"
  ),
]
PlayerEvents.loggedIn((event) => {
  if (! event.server.data.has(`${event.player.name}_hasGottenStarterDeals`)) {
    event.server.data.add(`${event.player.name}_hasGottenStarterDeals`, "true")
    starterDeals.forEach((deal) => event.player.give(deal));
  }
});

// PlayerEvents.chat((event) => {
//   starterDeals.forEach((deal) => event.player.give(deal));
// });

// let payment = Item.of("4x create:belt_connector");
// let payment1 = Item.of("4x create:cogwheel");
// let payment2 = Item.of("4x create:andesite_casing");
// let requested = Item.of("64x create:iron_sheet");
// let title = "We want plates";
// let company_name = "Bobs Construction Fleet";
// let orderedAmount = 2;
// let dynamicItem = Item.of(
//   "wares:delivery_agreement",
//   `{\
//         display:{Name:'{\"text\":\"${company_name}\",\"italic\":\"false\"}'},\
//         ordered:${orderedAmount},\
//         paymentItems:[${payment.toNBT()},${payment1.toNBT()},${payment2.toNBT()}],\
//         requestedItems:[${requested.toNBT()},${requested.toNBT()}],\
//         title:\'{"text":"${title}"}\'\
//     }`
// );
// ///give @s wares:delivery_agreement{title:'{"text":"A Great Deal"}',requestedItems:[{id:"minecraft:stick",Count:2}],paymentItems:[{id:"minecraft:emerald",Count:1}],ordered:10,buyerName:"red inc", buyerAddress:"red planet"}
// let dynamicCompletedItem = Item.of(
//   "wares:completed_delivery_agreement",
//   '{delivered:2,display:{Name:\'{"text":"Bobs Construction Fleet","italic":"false"}\'},isCompleted:1b,ordered:2,paymentItems:[{Count:4,id:"create:belt_connector"},{Count:4,id:"create:cogwheel"},{Count:4,id:"create:andesite_casing"}],requestedItems:[{Count:64,id:"create:iron_sheet"},{Count:64,id:"create:iron_sheet"}],title:\'{"text":"We want plates"}\'}'
// );
// let pig = Item.of(
//   "supplementaries:cage",
//   '{BlockEntityTag:{ForgeCaps:{},MobHolder:{EntityData:{AbsorptionAmount:0.0f,Age:-23553,Air:300s,ArmorDropChances:[0.085f,0.085f,0.085f,0.085f],ArmorItems:[{},{},{},{}],Attributes:[{Base:0.25d,Name:"minecraft:generic.movement_speed"},{Base:0.08d,Name:"forge:entity_gravity"},{Base:0.0d,Name:"forge:step_height_addition"}],Brain:{memories:{}},CanPickUpLoot:0b,CanUpdate:1b,DeathTime:0s,FallDistance:0.0f,FallFlying:0b,Fire:0s,ForcedAge:0,ForgeData:{},HandDropChances:[0.085f,0.085f],HandItems:[{},{}],Health:10.0f,HurtByTimestamp:0,HurtTime:0s,InLove:0,Invulnerable:0b,LeftHanded:0b,Motion:[0.0d,-0.0784000015258789d,0.0d],OnGround:1b,PersistenceRequired:1b,PortalCooldown:0,Pos:[0.5d,0.0626d,0.5d],Rotation:[0.0f,0.0f],Saddle:0b,id:"minecraft:pig"},Name:"Pig",Scale:0.6944445f,UUID:[I;57360641,-1411430334,-1245227404,2119155284]}}}'
// );
// let identicalButFromFunction = getAgreement(
//   [payment, payment1, payment2, pig, "5x iron_ingot", "create:andesite_alloy"],
//   [requested, requested],
//   title,
//   orderedAmount,
//   company_name,
//   "hello m8"
// );
// function getAgreement(
//   paymentItems,
//   requestedItems,
//   title,
//   orderedAmount,
//   company,
//   message
// ) {
//   if (!orderedAmount) orderedAmount = parseInt(1);
//   if (!title) title = "stuffs";
//   return Item.of(
//     "wares:delivery_agreement",
//     `{\
//       display:{Name:'{\"text\":\"${
//         company + " - " + title
//       }\",\"italic\":\"false\"}'},\
//       ordered:${orderedAmount},\
//       message:'{"text":"${message}"}',\
//       buyerName:'{"color":"#409D9B","text":"${company}"}',\
//       paymentItems:${simple(paymentItems)},\
//       requestedItems:${simple(requestedItems)},\
//       title:\'{"text":"${title}"}\'\
//     }`
//   );
// }

// addMixing(
//   dynamicItem,
//   ["9x #forge:dyes/yellow", "minecraft:paper"],
//   temperature.none,
//   450
// );
// addShapeless(dynamicItem, dynamicCompletedItem.weakNBT());

// PlayerEvents.chat((event) => {
//   event.player.give(dynamicItem);
//   event.player.give(identicalButFromFunction);
// });
