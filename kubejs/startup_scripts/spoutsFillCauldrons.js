CreateEvents.spoutHandler((event) => {
  event.add(
    "fill_cauldron_water",
    "minecraft:cauldron",
    (block, fluid, simulate) => {
      if (fluid.id == "minecraft:water" && fluid.amount >= 1000) {
        if (!simulate) {
          block.set("minecraft:water_cauldron", { level: `3` });
        }
        return 1000;
      }
      return 0;
    }
  );
  event.add(
    "fill_cauldron_lava",
    "minecraft:cauldron",
    (block, fluid, simulate) => {
      if (fluid.id == "minecraft:lava" && fluid.amount >= 1000) {
        if (!simulate) {
          block.set("minecraft:lava_cauldron", { level: `3` });
        }
        return 1000;
      }
      return 0;
    }
  );
//   event.add(
//     "fill_cauldron_process",
//     "minecraft:water_cauldron",
//     (block, fluid, simulate) => {
//     const { level } = block.properties
//       if (fluid.id == "minecraft:water" && level != `3` && fluid.amount >= 333) {
//         if (!simulate) {
//           if (level == '1') {
//             block.set("minecraft:water_cauldron", { level: `2` });
//           } else if (level == 2) {
//             block.set("minecraft:water_cauldron", { level: `3` });
//           }
//         }
//         return 100;
//       }
//       return 0;
//     }
//   );
});
