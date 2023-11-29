// ItemEvents.entityInteracted("minecraft:bone_meal", event => {
//     let currentTime = event.getTarget().level.getTime();
//     console.info(event.getTarget().persistentData.get("lastFertilized"));
//     if (event.getTarget().persistentData.get("lastFertilized")) {
//         let lastFertilized = event.getTarget().persistentData.getInt("lastFertilized");
//         let timeSinceLastFertilized = currentTime - lastFertilized;
//         console.info(
//             `current time: ${currentTime}, last fertilized: ${lastFertilized}, time since last fertilized: ${timeSinceLastFertilized}`
//         );
//         if (timeSinceLastFertilized < 600) {
//             console.log("cow fertilized too recently");
//             event.getLevel().runCommandSilent("/particle angry_villager " + event.getTarget().getX() + " " + event.getTarget().getY() + " " + event.getTarget().getZ() + " 0.3 0.7 0.3 1 4");
//             event.cancel();
//         } else {
//             event.getTarget().persistentData.put("lastFertilized", currentTime);
//         }
//     } else {
//         event.getTarget().persistentData.put("lastFertilized", currentTime);
//     }
// })