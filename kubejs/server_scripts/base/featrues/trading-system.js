
// addMixing(['paper %50', 'stone %50'],['5x cobblestone'])

// function createTradeAgreement(payment, requested, ordered, expiresInSeconds, title){
//     let item = Item.of('wares:sealed_delivery_agreement', `{ordered:${ordered},payment:[${payment}],requested:[${requested}],title:${title}, expiresInSeconds: ${expiresInSeconds}}`)
//     return item
// }
// function solveWaresResults(results_string) {}
// function createAgreement(payment, requested, title, orderedAmount) {
//   if (!orderedAmount) orderedAmount = parseInt(1);
//   if (!title) title = "stuffs";
//   return Item.of(
//     "wares:sealed_delivery_agreement",
//     `{ordered:${orderedAmount},payment:${payment},requested:${requested},title:${title}`
//   );
// }
// Item.of('wares:sealed_delivery_agreement', '{ordered:10,payment:[{Count:1,id:"minecraft:emerald"}],requested:[{Count:{max:16,min:4,step:4},id:"minecraft:stick"}],title:\'{"text":"A Great Deal"}\'}')
// Item.of('wares:sealed_delivery_agreement', '{ordered:10,payment:[{Count:1.0d,id:"minecraft:emerald"}],requested:[{Count:{max:16,min:4,step:4},id:"minecraft:stick"}],title:\'{"text":"A Great Deal"}\'}')
// Item.of('wares:sealed_delivery_agreement', "{ordered:10,payment:['{\"Count\":1.0,\"id\":\"minecraft:emerald\"}'],requested:[{Count:{max:16,min:4,step:4},id:\"minecraft:stick\"}],title:'{\"text\":\"A Great Deal\"}'}")
let payment = Item.of("4x create:belt_connector");
let payment1 = Item.of("4x create:cogwheel");
let payment2 = Item.of("4x create:andesite_casing");
let requested = Item.of("64x create:iron_sheet");
let title = "We want plates";
let company_name = "Bobs Construction Fleet";
let orderedAmount = 2;
let dynamicItem = Item.of(
  "wares:delivery_agreement",
  `{\
        display:{Name:'{\"text\":\"${company_name}\",\"italic\":\"false\"}'},\
        ordered:${orderedAmount},\
        paymentItems:[${payment.toNBT()},${payment1.toNBT()},${payment2.toNBT()}],\
        requestedItems:[${requested.toNBT()},${requested.toNBT()}],\
        title:\'{"text":"${title}"}\'\
    }`
);
let dynamicCompletedItem = Item.of('wares:completed_delivery_agreement', "{delivered:2,display:{Name:'{\"text\":\"Bobs Construction Fleet\",\"italic\":\"false\"}'},isCompleted:1b,ordered:2,paymentItems:[{Count:4,id:\"create:belt_connector\"},{Count:4,id:\"create:cogwheel\"},{Count:4,id:\"create:andesite_casing\"}],requestedItems:[{Count:64,id:\"create:iron_sheet\"},{Count:64,id:\"create:iron_sheet\"}],title:'{\"text\":\"We want plates\"}'}");

addMixing(
  dynamicItem,
  ["9x #forge:dyes/yellow", "minecraft:paper"],
  temperature.none,
  450
);
addShapeless(dynamicItem, dynamicCompletedItem.weakNBT());

// PlayerEvents.chat((event) => {
//   // event.player.give('minecraft:stick')
//   // spawner{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:diamond"}],id:"minecraft:shulker_box"}}
//   // Item.of('minecraft:spawner', '{BlockEntityTag:{SpawnData:{entity:{id:"zombie"}}}}')
//   // Item.of('minecraft:spawner', '{BlockEntityTag:{SpawnData:{entity:{id:"zombie"}}},RepairCost:0,display:{Name:\'{"text":"Zombie Spawner"}\'}}')
//   // Item.of('minecraft:shulker_box', 'minecraft:shulker_box{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:diamond"}],id:"minecraft:shulker_box"}}')
//   // let paymentObject = {Count: 100, id: "minecraft:spawner"};
//   // let requestedObject = {id:"minecraft:emerald", Count: 4, display:{Name:'{"translate":"item.minecraft.diamond"}'}}
//   // Item.of('wares:completed_delivery_agreement', "{RepairCost:0,delivered:1,deliveryTime:-1,display:{Name:'{\"text\":\"IGT - Paper contract\"}'},isCompleted:1b,ordered:1,paymentItems:[{Count:4,id:\"minecraft:emerald\"}],requestedItems:[{id:\"minecraft:shulker_box\",tag:{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:\"minecraft:diamond\"}],id:\"minecraft:shulker_box\"}}}]}")
//   let title = "We want plates";
//   let company_name = "Bobs Construction Fleet";
//   let orderedAmount = 2;
//   let item = Item.of(
//     "wares:sealed_delivery_agreement",
//     `{\
//             display:{Name:'{\"text\":\"IGT - Paper contract\",\"italic\":\"false\"}'},\
//             ordered:1,\
//             storyId:0,\
//             payment:[{id:"minecraft:emerald", Count: 4}],\
//             requested:[{Count: 1, id:"minecraft:shulker_box", tag:{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:diamond"}],id:"minecraft:shulker_box"}}}],\
//             title:\'{"text":"${title}"}\'\
//         }`
//   );

  // let dynamicItem = Item.of( //this works
  //     'wares:sealed_delivery_agreement',
  //     `{\
  //         display:{Name:'{\"text\":\"IGT - Paper contract\",\"italic\":\"false\"}'},\
  //         ordered:1,\
  //         storyId:0,\
  //         payment:[${payment.toNBT()}],\
  //         requested:[{Count: 1, id:"minecraft:shulker_box", tag:{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:diamond"}],id:"minecraft:shulker_box"}}}],\
  //         title:\'{"text":"${title}"}\'\
  //     }`
  // )
  // let item2 = Item.of(
  //     'wares:sealed_delivery_agreement',
  //     `{
  //         "id": "example_agreement",
  //         "title": '{color: "#922706", text: "Example Agreement"}',
  //         "message":'{text: "too much text here so shortening cupidatat\\nnontext minim\\nveniam, text culpa"}',
  //         "buyerName":'{color : "#333333" , text: "Greg the Blacksmith"}',
  //         "buyerAddress": '{obfuscated: true, text: "12 Side Road, Vibrant Plains Village"}',
  //         "requestedItems": [{id: "minecraft:baked_potato", Count: 4}, {id: "minecraft:pumpkin_pie", Count: 2}],
  //         "paymentItems": [{id: "minecraft:emerald", Count: 2}],
  //         "expireTimestamp": 240436,
  //         "experience": 12,
  //         "ordered": 5
  //     }`
  // )
//   event.player.give(item);
//   event.player.give(dynamicItem);
//   // event.player.give(item2)
//   // event.server.runCommand(`/give @s wares:sealed_delivery_agreement{title:'{"text":"A Great Deal"}',requested:[{id:"minecraft:stick",Count:{min:4,max:16,step:4}}],payment:[{id:"minecraft:emerald",Count:1}],ordered:10}`)
// });

// let orderedAmount = 10;
// let paymentObject = {Count: 1, id: "minecraft:emerald"};
// let requestedObjects = [{Count: {max: 16, min: 4, step: 4}, id: "minecraft:stick"}];
// let titleObject = {"text": "A Great Deal"};

// // Convert objects to strings using JSON.stringify
// let paymentString = JSON.stringify([paymentObject]);
// let requestedString = JSON.stringify(requestedObjects);
// let titleString = JSON.stringify(titleObject);

// // Use the variables to construct the final string
// let itemDataString = `wares:sealed_delivery_agreement{ordered:${orderedAmount},payment:${paymentString},requested:${requestedString},title:${titleString}}`;
// Item.of('wares:completed_delivery_agreement', '{storyId:0,delivered:1,deliveryTime:-1,isCompleted:1b,ordered:1,paymentItems:[{Count:4,id:"minecraft:emerald"}],requestedItems:[{id:"minecraft:shulker_box",tag:{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:diamond"}],id:"minecraft:shulker_box"}}}]}')
// // // Use the final string to create the item
// // let item = Item.of(itemDataString);
// // event.player.give(item);

// ItemEvents.rightClicked(ItemEvents.rightClicked(Item.of('minecraft:paper', '{lvl:"potato"}'), e => e.player.tell('potato')))
