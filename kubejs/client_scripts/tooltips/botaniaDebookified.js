// priority: 10
function snakeToCamel(str) {
  return str.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

function grabPage(camelCasedName, num, maxDepth) {
  maxDepth = maxDepth || 2;
  if (num > maxDepth) return "...";
  let key = `botania.page.${camelCasedName}${num}`;
  let translated = Text.translate(key);
  if (translated.getString() === key) return "";
  if (translated.getString() === "") return "";
  return " " + translated.getString() + grabPage(camelCasedName, num + 1);
}
function parseBotaniaPageSyntax(str) {
  return str
    .replace(/\$\((p)?([^)]*)\)/g, (match, p1) => (p1 ? "" : "_")) // clean book references and replace with bold (_)
    .replace(/(\.\s*)([A-Z])/g, ". $2"); //add a space after a period if it's followed by an uppercase letter without a space
}

const inconsistentNamesMap = {
  manaPylon: "pylon",
  rosaArcana: "arcanerose",
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
  gaiaPylon: "gaiaRitual",
  dreamwoodWand: "elfResources",
  shulkMeNot: "shulk_me_not",
  bellethorn: "bellethorne",
  dreadthorn: "dreadthorne",
};
function replaceInconsistentNames(str) {
  Object.entries(inconsistentNamesMap).forEach(([key, value]) => {
    if (key.endsWith("_") && str.includes(key.replace("_", ""))) {
      str = value;
    }
    str = str.replace(key, value);
  });
  return str;
}
ClientEvents.highPriorityAssets((event) => {
  let obj = {};
  Ingredient.of(/^botania:/).stacks.forEach((item) => {
    let cameCaseName = snakeToCamel(item.id.split(":")[1] + "");
    cameCaseName = replaceInconsistentNames(cameCaseName);
    let key = `botania.tagline.${cameCaseName}`;
    let translated = Text.translate(key).getString();
    if (translated == key) {
      console.info(`missing description for ${item} key ${key}`);
      return;
    }
    let description = `_${translated}._${parseBotaniaPageSyntax(
      grabPage(cameCaseName, 0)
    )}`;
    // also add floating and chibi versions
    let floatingVersion = Item.of(
      item.id.split(":")[0] + ":floating_" + item.id.split(":")[1]
    );
    let chibiVersion = Item.of(item.id + "_chibi");
    let floatingChibiVersion = Item.of(floatingVersion.id + "_chibi");
    if (item.getDescriptionId() != "block.minecraft.air")
      obj[`${item.getDescriptionId()}.tooltip.summary`] = description;
    if (floatingVersion.getDescriptionId() != "block.minecraft.air")
      obj[`${floatingVersion.getDescriptionId()}.tooltip.summary`] =
        description;
    if (chibiVersion.getDescriptionId() != "block.minecraft.air")
      obj[`${chibiVersion.getDescriptionId()}.tooltip.summary`] = description;
    if (floatingChibiVersion.getDescriptionId() != "block.minecraft.air")
      obj[`${floatingChibiVersion.getDescriptionId()}.tooltip.summary`] =
        description;
  });
  if (Object.keys(obj).length > 0)
    JsonIO.write(
      "kubejs/assets/botania_tooltips/lang/en_us.json",
      sortObjectByKey(obj)
    );
});
