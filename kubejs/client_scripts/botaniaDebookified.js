// priority: 10
function snakeToCamel(str) {
  return str.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

function grabPage(camelCasedName, num, maxDepth) {
  maxDepth = maxDepth || 3;
  if (num > maxDepth) return "...";
  let key = `botania.page.${camelCasedName}${num}`;
  let translated = Text.translate(key);
  if (translated.getString() === key) return "";
  return " " + translated.getString() + grabPage(camelCasedName, num + 1);
}
function parseBotaniaPageSyntax(str) {
  return str
    .replace(/\$\((p)?([^)]*)\)/g, (match, p1) => (p1 ? "" : "_")) // clean book references and replace with bold (_)
    .replace(/(\.\s*)([A-Z])/g, ". $2"); //add a space after a period if it's followed by an uppercase letter without a space
}

const inconsistentNamesMap = {
  manaPylon: "pylon",
  naturaPylon: "aIntro",
  alfheimPortal: "aIntro",
  lightRelay: "luminizerTransport",
  detectorLightRelay: "luminizerTransport",
  forkLightRelay: "luminizerTransport",
  toggleLightRelay: "luminizerTransport",
  lightLauncher: "luminizerTransport",
  manaSpreader: "spreader",
  manaPool: "pool",
  dilutedPool: "pool",
  fabulousPool: "pool",
  elvenSpreader: "dreamwoodSpreader",
  enchanter: "manaEnchanting",
  manaDistributor: "distributor",
  manaFluxfield: "rfGenerator",
  twigWand: "wand",
  pump: "poolCart",
  craftyCrate: "craftCrate",
  apothecary_: "apothecary",
};
function replaceInconsistentNames(str) {
  Object.entries(inconsistentNamesMap).forEach(([key, value]) => {
    if (key.endsWith('_') && str.includes(key.replace('_', ''))) {
      str = value
    }
    str = str.replace(key, value);
  });
  return str;
}
Ingredient.of("@botania").stacks.forEach((item) => {
  let cameCaseName = snakeToCamel(item.id.split(":")[1] + "");
  cameCaseName = replaceInconsistentNames(cameCaseName);
  let key = `botania.tagline.${cameCaseName}`;
  let translated = Text.translate(key).getString();
  if (translated == key) {
    console.info(`missing description for ${item} key ${key}`);
    return;
  }
  let description = `_${translated}._${parseBotaniaPageSyntax(grabPage(cameCaseName, 0))}`;
  // also add floating and chibi versions
  let floatingVersion = Item.of(item.id.split(":")[0] + ":floating_" + item.id.split(":")[1]);
  let chibiVersion = Item.of(item.id + "_chibi");
  let floatingChibiVersion = Item.of(floatingVersion.id + "_chibi");
  if (floatingVersion !== "minecraft:air")addTooltip(floatingVersion, description);
  if (chibiVersion !== "minecraft:air") addTooltip(chibiVersion, description);
  if (floatingChibiVersion !== "minecraft:air") addTooltip(floatingChibiVersion, description);
  
  addTooltip(item, description);
});
