ItemEvents.modification((event) => {
  const tools = [
    /.*_sword$/,
    /.*_shovel$/,
    /.*_pickaxe$/,
    /.*_axe$/,
    /.*_hoe$/,
  ];
  const armor = [/.*_helmet$/, /.*_chestplate$/, /.*_leggings$/, /.*_boots$/];

  tools
    .concat(armor)
    .forEach((i) => event.modify(i, (item) => item.setMaxStackSize(16)));

  event.modify("minecraft:bow", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:potion", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:oak_boat", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:enchanted_book", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:fishing_rod", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:cake", (item) => item.setMaxStackSize(64));

});
