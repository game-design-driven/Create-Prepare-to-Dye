ItemEvents.tooltip((event) => {
  event.addAdvanced(/.*/, (item, advanced, text) => {
    item = Item.of(item);
    text.add(
      Text.blue(Utils.toTitleCase(item.mod.trim())).append(getCategory(item)).append(getDeviceType(item))
    );
  });
});

let allowed_tabs = [
  "building_blocks",
  "decorations",
  "redstone",
  "transportation",
  "misc",
  "food",
  "tools",
  "combat",
  "brewing",
  "materials",
];
// let disallowed_mod_name = ["minecraft"];
// function getModName(item) {
//   item = Item.of(item);
//   if (disallowed_mod_name.includes(item.mod)) return Text.blue("");
//   return Text.blue(Utils.toTitleCase(item.mod));
// }
function getDeviceType(item) {
  let item2 = Item.of(item);
  if (!item2.hasTag("forge:device")) return Text.of("");
  let deviceTag = item2
    .getTags()
    .toList()
    .filter((tag) => tag.location().path.startsWith("device/"))[0];
  console.log(deviceTag.location().path);
  // .find((tag) => JSON.stringify(tag).name.startsWith("forge:device/"));
  if (!deviceTag) return " ";
  let deviceType = deviceTag.location().path.split("/")[1];

  return Text.darkGray(" - ").append(
    Text.aqua(Utils.toTitleCase(deviceType)).append(" Device")
  );
}
function getCategory(item) {
  item = Item.of(item);
  if (!allowed_tabs.includes(item.creativeTab)) return Text.of("");
  return Text.darkGray(" - ").append(
    Text.gold(Utils.toTitleCase(item.creativeTab.replace("_", " ")))
  );
}
