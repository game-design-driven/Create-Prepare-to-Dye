// let title = 'IGT - Paper contract'
// let item = Item.of(
//   'wares:sealed_delivery_agreement',
//   `{\
//       display:{Name:'{\"text\":\"IGT - Paper contract\",\"italic\":\"false\"}'},\
//       ordered:1,\
//       storyId:0,\
//       payment:[{id:"minecraft:emerald", Count: 4}],\
//       requested:[{Count: 1, id:"minecraft:shulker_box", tag:{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"minecraft:diamond"}],id:"minecraft:shulker_box"}}}]
//   }`
// ) 
// let result = Item.of('wares:completed_delivery_agreement', "{RepairCost:0,delivered:1,deliveryTime:-1,display:{Name:'{\"text\":\"IGT - Paper contract\",\"italic\":\"false\"}'},isCompleted:1b,ordered:1,paymentItems:[{Count:4,id:\"minecraft:emerald\"}],requestedItems:[{id:\"minecraft:shulker_box\",tag:{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:\"minecraft:diamond\"}],id:\"minecraft:shulker_box\"}}}]}")
// StartupEvents.postInit(event =>{
//   let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
//   let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')
//   $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(item, Item.of('wares:delivery_agreement', "{RepairCost:0,display:{Name:'{\"text\":\"IGT - Paper contract\"}'}}")), )
// })
