// let conversionList =[{
//     'input': Item.of('minecraft:stone'),
//     'output': Item.of('minecraft:cobblestone')
// }]

// PlayerEvents.inventoryChanged(event => {
//     // if (event.item.id === 'wares:delivery_agreement' || event.item.id === 'wares:completed_delivery_agreement') {

//         // event.player.getInventory().setStackInSlot(event.slot, 'dirt')

        
//         let conversion = conversionList.find(conversion => conversion.input.toJson() == event.item.toJson())
//         conversionList.forEach(conversion => {
//             if (conversion.input.toJson().toString() == event.item.toJson().toString()) {
//                 Utils.server.tell(conversion.input.toJson())
//                 event.player.inventory.clear(conversion.input)
//                 event.player.inventory.
//                 event.player.give(conversion.output.withCount(event.item.count))
//                 // event.player.getInventory().getAllItems().forEach(item => {
//                 //     if (item.toJson().toString() == conversion.input.toJson().toString()) {
//                 //         event.player.getInventory().setStackInSlot(event.slot, conversion.output)
//                 //     }
//                 // })
//             }   
//         })
//     // }
// })