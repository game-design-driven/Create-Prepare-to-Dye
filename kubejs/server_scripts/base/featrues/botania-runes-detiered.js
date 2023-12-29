if (feature("demote rune of summer")) {
  removeRecipe({ id: "botania:runic_altar/spring" });
  removeRecipe({ id: "botania:runic_altar/summer" });
  removeRecipe({ id: "botania:runic_altar/autumn" });
  removeRecipe({ id: "botania:runic_altar/winter" });
  addAltar(
    "botania:rune_spring",
    [
      "#forge:crops/wheat",
      "#minecraft:saplings",
      "#forge:dusts/mana",
      "gunpowder",
      "nether_brick",
      "#forge:ingots/manasteel",
      "#forge:dyes/pink",
    ],
    8000
  );
  addAltar(
    "botania:rune_summer",
    [
      "sand",
      "melon_slice",
      "slime_block",
      "#minecraft:wool_carpets",
      "coal_block",
      "water_bucket",
      "#forge:dyes/cyan",
    ],
    8000
  );
  addAltar(
    "botania:rune_autumn",
    [
      "#minecraft:leaves",
      "spider_eye",
      "#minecraft:wool_carpets",
      "string",
      "nether_wart",
      "#forge:regular_flowers",
      "#forge:dyes/yellow",
    ],
    8000
  );
  addAltar(
    "botania:rune_winter",
    [
      "cake",
      "spider_eye",
      "#minecraft:wool",
      "snow_block",
      "#forge:storage_blocks/coal",
      "flint_and_steel",
      "#forge:dyes/white",
    ],
    8000
  );
}

if (feature("Remove need for rune of spring")) {
  removeRecipe({ id: "botania:petal_apothecary/agricarnation" });
  addApothecary(
    "botania:agricarnation",
    [
      "#forge:dyes/lime",
      "#forge:dyes/lime",
      "#forge:dyes/green",
      "#forge:dyes/yellow",
      "#forge:dusts/redstone",
    ],
  );
}
