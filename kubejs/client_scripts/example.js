// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info("Hello, World! (Loaded client scripts)");

ClientEvents.lang("en_us", (event) => {
  // event.renameItem("ad_astra:steel_tank", "Tank")
  // event.renameItem("ad_astra:steel_engine", "Engine")
  // event.renameItem("ad_astra:steel_cable", "Cable")
});


// const $Util = Java.loadClass("net.minecraft.Util");
// const $StonecutterScreen = Java.loadClass(
//   "net.minecraft.client.gui.screens.inventory.StonecutterScreen"
// );
// const $stoneCutterMenu = Java.loadClass(
//     "net.minecraft.world.inventory.StonecutterMenu"
// )
// ItemEvents.rightClicked((event) => {
//   let screen = Client.currentScreen;
//   Client.setScreen(
//     new $StonecutterScreen(
//         new $stoneCutterMenu(
//             1, 
//             Client.player.inventory,
//         ),
//         Client.player.getInventory(),
//         Component.black('test')
//     )
//   );
// });
