ItemEvents.modification((event) => {
  const tools = [
    /minecraft:.*_sword/,
    /minecraft:.*_shovel/,
    /minecraft:.*_pickaxe/,
    /minecraft:.*_axe/,
    /minecraft:.*_hoe/,
  ];
  const armor =[
    /minecraft:.*_helmet/,
    /minecraft:.*_chestplate/,
    /minecraft:.*_leggings/,
    /minecraft:.*_boots/,
  ]

  tools.forEach((tool) => {
    event.modify(tool, (item) => {
        item.setMaxStackSize(16)
    });
  });
});
