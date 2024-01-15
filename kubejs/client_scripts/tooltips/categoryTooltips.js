if (feature("Add special tooltips for mods categories and device types")) {
  ItemEvents.tooltip((event) => {
    event.addAdvanced(/.*/, (item, advanced, text) => {
      item = Item.of(item);
      if (event.isCtrl())
        text.add(
          Text.darkGray("[").append(
            Text.blue(Utils.toTitleCase(item.mod.trim())).append(
              Text.darkGray("]")
            )
          )
        );
      if (getCategory(item).isEmpty() && getDeviceType(item).isEmpty()) return;
      text.add(getCategory(item).append(getDeviceType(item)));
    });
  });
}
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
  if (!deviceTag) return " ";
  let deviceType = deviceTag.location().path.split("/")[1];

  if (allowed_tabs.includes(item.creativeTab)) {
    return Text.darkGray(" - ").append(
      Text.aqua(Utils.toTitleCase(deviceType)).append(" Device")
    );
  }
  return Text.aqua(Utils.toTitleCase(deviceType)).append(" Device");
}
function getCategory(item) {
  item = Item.of(item);
  if (!allowed_tabs.includes(item.creativeTab)) return Text.of("");
  return Text.darkGray("").append(
    Text.gold(Utils.toTitleCase(item.creativeTab.replace("_", " ")))
  );
}
